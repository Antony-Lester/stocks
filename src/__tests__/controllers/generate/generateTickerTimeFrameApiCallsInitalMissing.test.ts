// eslint-disable-next-line node/no-unpublished-import, node/no-extraneous-import
import {describe, expect, test} from '@jest/globals';
import db from '../../../db/connection';
import generateTickerTimeFrameApiCallsInitalMissing from '../../../controllers/generate/generateTickerTimeFrameApiCallsInitalMissing';
import createTickerTimeFrameTable from '../../../controllers/create/createTickerTimeFrameTable';
import dropTable from '../../../controllers/drop/dropTable';
import populateTickerTimeFrameTable from '../../../controllers/populate/populateTickerTimeFrameTableBase';

describe('generate ticker time frame api calls inital', () => {
  test('returns a array of arrays', async () => {
    const client = await db.connect();
    try {
      client.query('BEGIN');
      await createTickerTimeFrameTable('A_B_1Min');
      await populateTickerTimeFrameTable('A_B_1Min', {
        timestamp: '2015-01-01T00:00:00.000Z',
        open: 1,
        high: 1,
        low: 1,
        close: 1,
        vol: 1,
      });
      const results = await generateTickerTimeFrameApiCallsInitalMissing(
        'A_B_1Min'
      );
      expect(Array.isArray(results)).toBe(true);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      expect(Array.isArray(results[0])).toBe(true);
      expect(results?.length).toBe(415);
      expect(results?.[0]).toEqual([
        'A_B_1Min',
        '2015-01-04T00:00:00.000Z',
        '2015-01-10T00:00:00.000Z',
      ]);
      expect(results?.[414]).toEqual([
        'A_B_1Min',
        '2022-12-18T00:00:00.000Z',
        '2022-12-24T00:00:00.000Z',
      ]);
      await dropTable('A_B_1Min');
      client.query('ROLLBACK');
    } finally {
      client.release();
    }
  }, 10000);
});
