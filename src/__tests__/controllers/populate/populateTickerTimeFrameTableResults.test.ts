// eslint-disable-next-line node/no-unpublished-import, node/no-extraneous-import
import {describe, expect, test} from '@jest/globals';

import db from '../../../db/connection';

import dropTable from '../../../controllers/drop/dropTable';
import createTickerTimeFrameTable from '../../../controllers/create/createTickerTimeFrameTable';
import populateTickerTimeFrameTableResults from '../../../controllers/populate/populateTickerTimeFrameTableResults';
import {dataPointBase, dataPointResult} from '../../../db/data/test-data';
import populateTickerTimeFrameTableBase from '../../../controllers/populate/populateTickerTimeFrameTableBase';

describe('populate ticker time frame table metrics', () => {
  test.only('populates a table named ticker_time_frame_test with data provided', async () => {
    const client = await db.connect();
    try {
      client.query('BEGIN');
      await createTickerTimeFrameTable('ticker_time_frame_test');
      await populateTickerTimeFrameTableBase(
        'ticker_time_frame_test',
        dataPointBase
      );

      await populateTickerTimeFrameTableResults(
        'ticker_time_frame_test',
        dataPointResult
      );

      const result = await client.query(
        'SELECT * FROM ticker_time_frame_test;'
      );

      expect(result.rows[0].timestamp.toISOString()).toBe(
        dataPointResult.timestamp
      );
      expect(result.rows[0].result_long_1).toBe(
        dataPointResult.result_long_1.toString()
      );
      expect(result.rows[0].result_long_2).toBe(
        dataPointResult.result_long_2.toString()
      );
      expect(result.rows[0].result_long_3).toBe(
        dataPointResult.result_long_3.toString()
      );
      expect(result.rows[0].result_long_4).toBe(
        dataPointResult.result_long_4.toString()
      );
      expect(result.rows[0].result_long_5).toBe(
        dataPointResult.result_long_5.toString()
      );
      expect(result.rows[0].result_real_1).toBe(
        dataPointResult.result_real_1.toString()
      );
      expect(result.rows[0].result_real_2).toBe(
        dataPointResult.result_real_2.toString()
      );
      expect(result.rows[0].result_real_3).toBe(
        dataPointResult.result_real_3.toString()
      );
      expect(result.rows[0].result_real_4).toBe(
        dataPointResult.result_real_4.toString()
      );
      expect(result.rows[0].result_real_5).toBe(
        dataPointResult.result_real_5.toString()
      );
      expect(result.rows[0].result_short_1).toBe(
        dataPointResult.result_short_1.toString()
      );
      expect(result.rows[0].result_short_2).toBe(
        dataPointResult.result_short_2.toString()
      );
      expect(result.rows[0].result_short_3).toBe(
        dataPointResult.result_short_3.toString()
      );
      expect(result.rows[0].result_short_4).toBe(
        dataPointResult.result_short_4.toString()
      );
      expect(result.rows[0].result_short_5).toBe(
        dataPointResult.result_short_5.toString()
      );

      dropTable('ticker_time_frame_test');
      client.query('ROLLBACK');
    } finally {
      client.release();
    }
  }, 10000);
});
