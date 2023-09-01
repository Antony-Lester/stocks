// eslint-disable-next-line node/no-unpublished-import, node/no-extraneous-import
import {describe, expect, test} from '@jest/globals';

import db from '../../../db/connection';
import {tickersData} from '../../../db/data/test-data';
import dropTable from '../../../controllers/drop/dropTable';
import createTickersTable from '../../../controllers/create/createTickersTable';
import {generateTickerTimeFrameTableNames} from '../../../controllers/generate/generateTickerTimeFrameTableNames';
import createTickerTimeFrameTable from '../../../controllers/create/createTickerTimeFrameTable';
import generateTickerTimeFrameApiCalls from '../../../controllers/generate/generateTickerTimeFrameApiCalls';
import populateTickersTable from '../../../controllers/populate/populateTickersTable';

describe('generate ticker time frame api calls', () => {
  test('returns a array of arrays', async () => {
    const client = await db.connect();
    try {
      client.query('BEGIN');
      await createTickersTable();
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      await populateTickersTable(tickersData);
      const tableNames = await generateTickerTimeFrameTableNames();

      if (tableNames) {
        for await (const tableName of tableNames) {
          await createTickerTimeFrameTable(tableName);
        }
        //--test--
        const result = await generateTickerTimeFrameApiCalls();
        expect(Array.isArray(result)).toBe(true);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        expect(Array.isArray(result[0])).toBe(true);
        expect(result?.length).toBe(1968);
        expect(result?.[0]).toEqual([
          'AAAAA_AAAAA_1Day',
          '2015-01-01T00:00:00.000Z',
          '2015-12-31T00:00:00.000Z',
        ]);
        expect(result?.[1967]).toEqual([
          'OTCxxxxxxxxxx_CAJPYxxxxxxxxxxx_5Min',
          '2022-12-11T00:00:00.000Z',
          '2022-12-24T00:00:00.000Z',
        ]);
        //--test--
        for await (const tableName of tableNames) {
          await dropTable(tableName);
        }
      }
      await dropTable('tickers');
      client.query('ROLLBACK');
    } finally {
      client.release();
    }
  }, 10000);
});
