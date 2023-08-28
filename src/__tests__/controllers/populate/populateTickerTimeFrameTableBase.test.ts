// eslint-disable-next-line node/no-unpublished-import, node/no-extraneous-import
import {describe, expect, test} from '@jest/globals';

import db from '../../../db/connection';

import dropTable from '../../../controllers/drop/dropTable';
import createTickerTimeFrameTable from '../../../controllers/create/createTickerTimeFrameTable';
import populateTickerTimeFrameTable from '../../../controllers/populate/populateTickerTimeFrameTableBase';
import {dataPointBase} from '../../../db/data/test-data';

describe('populate ticker time frame table', () => {
  test.only('populates a table named ticker_time_frame_test with data provided', async () => {
    const client = await db.connect();
    try {
      client.query('BEGIN');
      await createTickerTimeFrameTable('ticker_time_frame_test');
      await populateTickerTimeFrameTable(
        'ticker_time_frame_test',
        dataPointBase
      );

      const result = await client.query(
        'SELECT * FROM ticker_time_frame_test;'
      );
      expect(result.rows[0].vol).toBe(dataPointBase.vol.toString());
      expect(result.rows[0].timestamp.toISOString()).toBe(
        dataPointBase.timestamp
      );
      expect(result.rows[0].open).toBe(dataPointBase.open.toString());
      expect(result.rows[0].close).toBe(dataPointBase.close.toString());
      expect(result.rows[0].high).toBe(dataPointBase.high.toString());
      expect(result.rows[0].low).toBe(dataPointBase.low.toString());
      expect(result.rows[0].vol).toBe(dataPointBase.vol.toString());

      dropTable('ticker_time_frame_test');
      client.query('ROLLBACK');
    } finally {
      client.release();
    }
  }, 10000);
});
