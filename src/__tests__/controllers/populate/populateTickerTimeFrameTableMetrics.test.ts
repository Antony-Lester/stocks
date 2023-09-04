// eslint-disable-next-line node/no-unpublished-import, node/no-extraneous-import
import {describe, expect, test} from '@jest/globals';

import db from '../../../db/connection';

import dropTable from '../../../controllers/drop/dropTable';
import createTickerTimeFrameTable from '../../../controllers/create/createTickerTimeFrameTable';
import populateTickerTimeFrameTableMetrics from '../../../controllers/populate/populateTickerTimeFrameTableMetrics';
import {dataPointBase, dataPointMetric} from '../../../db/data/test-data';
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
      await populateTickerTimeFrameTableMetrics(
        'ticker_time_frame_test',
        dataPointMetric
      );

      const result = await client.query(
        'SELECT * FROM ticker_time_frame_test;'
      );

      expect(result.rows[0].timestamp.toISOString()).toBe(
        dataPointMetric.timestamp
      );
      expect(result.rows[0].metric_adx_a).toBe(
        dataPointMetric.metric_adx_a.toString()
      );
      expect(result.rows[0].metric_adx_b).toBe(
        dataPointMetric.metric_adx_b.toString()
      );
      expect(result.rows[0].metric_di_minus_a).toBe(
        dataPointMetric.metric_di_minus_a.toString()
      );
      expect(result.rows[0].metric_di_minus_b).toBe(
        dataPointMetric.metric_di_minus_b.toString()
      );
      expect(result.rows[0].metric_di_plus_a).toBe(
        dataPointMetric.metric_di_plus_a.toString()
      );
      expect(result.rows[0].metric_di_plus_b).toBe(
        dataPointMetric.metric_di_plus_b.toString()
      );
      expect(result.rows[0].metric_eom_a).toBe(
        dataPointMetric.metric_eom_a.toString()
      );
      expect(result.rows[0].metric_eom_b).toBe(
        dataPointMetric.metric_eom_b.toString()
      );
      expect(result.rows[0].metric_mfi_a).toBe(
        dataPointMetric.metric_mfi_a.toString()
      );
      expect(result.rows[0].metric_mfi_b).toBe(
        dataPointMetric.metric_mfi_b.toString()
      );
      expect(result.rows[0].metric_rsi_a).toBe(
        dataPointMetric.metric_rsi_a.toString()
      );
      expect(result.rows[0].metric_rsi_b).toBe(
        dataPointMetric.metric_rsi_b.toString()
      );
      expect(result.rows[0].metric_sar_a).toBe(
        dataPointMetric.metric_sar_a.toString()
      );
      expect(result.rows[0].metric_sar_b).toBe(
        dataPointMetric.metric_sar_b.toString()
      );
      expect(result.rows[0].metric_sc_a).toBe(
        dataPointMetric.metric_sc_a.toString()
      );
      expect(result.rows[0].metric_sc_b).toBe(
        dataPointMetric.metric_sc_b.toString()
      );
      expect(result.rows[0].metric_time).toBe(
        dataPointMetric.metric_time.toString()
      );
      expect(result.rows[0].metric_cp_s3).toBe(
        dataPointMetric.metric_cp_s3.toString()
      );
      expect(result.rows[0].metric_cp_s2).toBe(
        dataPointMetric.metric_cp_s2.toString()
      );
      expect(result.rows[0].metric_cp_s1).toBe(
        dataPointMetric.metric_cp_s1.toString()
      );
      expect(result.rows[0].metric_cp_r1).toBe(
        dataPointMetric.metric_cp_r1.toString()
      );
      expect(result.rows[0].metric_cp_r2).toBe(
        dataPointMetric.metric_cp_r2.toString()
      );
      expect(result.rows[0].metric_cp_r3).toBe(
        dataPointMetric.metric_cp_r3.toString()
      );
      expect(result.rows[0].metric_fpp_s3).toBe(
        dataPointMetric.metric_fpp_s3.toString()
      );
      expect(result.rows[0].metric_fpp_s2).toBe(
        dataPointMetric.metric_fpp_s2.toString()
      );
      expect(result.rows[0].metric_fpp_s1).toBe(
        dataPointMetric.metric_fpp_s1.toString()
      );
      expect(result.rows[0].metric_fpp_r1).toBe(
        dataPointMetric.metric_fpp_r1.toString()
      );
      expect(result.rows[0].metric_fpp_r2).toBe(
        dataPointMetric.metric_fpp_r2.toString()
      );
      expect(result.rows[0].metric_fpp_r3).toBe(
        dataPointMetric.metric_fpp_r3.toString()
      );
      expect(result.rows[0].metric_td_r).toBe(
        dataPointMetric.metric_td_r.toString()
      );
      expect(result.rows[0].metric_td_s).toBe(
        dataPointMetric.metric_td_s.toString()
      );
      dropTable('ticker_time_frame_test');
      client.query('ROLLBACK');
    } finally {
      client.release();
    }
  }, 10000);
});
