// eslint-disable-next-line node/no-unpublished-import, node/no-extraneous-import
import {describe, expect, test, afterAll} from '@jest/globals';
import db from '../../../db/connection';
import dropTable from '../../../controllers/drop/dropTable';
import createTickerTimeFrameTable from '../../../controllers/create/createTickerTimeFrameTable';
import populateTickerTimeFrameTable from '../../../controllers/populate/populateTickerTimeFrameTableBase';
import populateTickerTimeFrameTableMetrics from '../../../controllers/populate/populateTickerTimeFrameTableMetrics';
import populateTickerTimeFrameTableResults from '../../../controllers/populate/populateTickerTimeFrameTableResults';
import {
  dataPointBase,
  dataPointMetric,
  dataPointResult,
} from '../../../db/data/test-data';

import readTickerTimeFrameTable from '../../../controllers/read/readTickerTimeFrameTable';

const name = 'ticker_time_frame_test';

afterAll(async () => {
  await dropTable('tickers');
});

describe('read ticker time frame table', () => {
  test('returns rows of ticker time frame table', async () => {
    const client = await db.connect();
    try {
      client.query('BEGIN');
      await createTickerTimeFrameTable(name);
      await populateTickerTimeFrameTable(name, dataPointBase);
      await populateTickerTimeFrameTableMetrics(name, dataPointMetric);
      await populateTickerTimeFrameTableResults(name, dataPointResult);
      await readTickerTimeFrameTable(name).then(data => {
        const expectedResult = {
          ...dataPointBase,
          ...dataPointMetric,
          ...dataPointResult,
        };
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        delete expectedResult.name;
        expect(data).toEqual([expectedResult]);
      });
      await dropTable(name);
      await client.query('ROLLBACK');
    } finally {
      client.release();
    }
  }, 10000);

  test('returns null if table missing', async () => {
    const client = await db.connect();
    try {
      client.query('BEGIN');
      await readTickerTimeFrameTable(name + '_missing').then(data => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        expect(data).toBe(null);
      });

      await client.query('ROLLBACK');
    } finally {
      client.release();
    }
  }, 10000);
  test('returns [] if table is empty', async () => {
    const client = await db.connect();
    try {
      client.query('BEGIN');
      await createTickerTimeFrameTable(name);
      await readTickerTimeFrameTable(name).then(data => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        expect(data).toEqual([]);
      });
      await dropTable('tickers');
      await client.query('ROLLBACK');
    } finally {
      client.release();
    }
  }, 10000);
});
