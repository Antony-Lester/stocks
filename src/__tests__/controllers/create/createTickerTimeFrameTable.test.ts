// eslint-disable-next-line node/no-unpublished-import, node/no-extraneous-import
import {describe, expect, test} from '@jest/globals';

import db from '../../../db/connection';
import dropTable from '../../../controllers/drop/dropTable';
import createTickerTimeFrameTable from '../../../controllers/create/createTickerTimeFrameTable';

const columnNames: Array<String> = [
  'timestamp',
  'open',
  'high',
  'low',
  'close',
  'vol',
  'metric_adx',
  'metric_di_minus',
  'metric_di_plus',
  'metric_eom',
  'metric_mfi',
  'metric_rsi',
  'metric_sar',
  'metric_sc',
  'metric_time',
  'metric_cp_s3',
  'metric_cp_s2',
  'metric_cp_s1',
  'metric_cp_r1',
  'metric_cp_r2',
  'metric_cp_r3',
  'metric_fpp_s3',
  'metric_fpp_s2',
  'metric_fpp_s1',
  'metric_fpp_r1',
  'metric_fpp_r2',
  'metric_fpp_r3',
  'metric_td_r',
  'metric_td_s',
  'result_long_1',
  'result_long_2',
  'result_long_3',
  'result_long_4',
  'result_long_5',
  'result_real_1',
  'result_real_2',
  'result_real_3',
  'result_real_4',
  'result_real_5',
  'result_short_1',
  'result_short_2',
  'result_short_3',
  'result_short_4',
  'result_short_5',
];
const columnTypes = [
  'timestamp with time zone',
  'numeric',
  'numeric',
  'numeric',
  'numeric',
  'numeric',
  'numeric',
  'numeric',
  'numeric',
  'numeric',
  'numeric',
  'numeric',
  'numeric',
  'numeric',
  'numeric',
  'numeric',
  'numeric',
  'numeric',
  'numeric',
  'numeric',
  'numeric',
  'numeric',
  'numeric',
  'numeric',
  'numeric',
  'numeric',
  'numeric',
  'numeric',
  'numeric',
  'numeric',
  'numeric',
  'numeric',
  'numeric',
  'numeric',
  'numeric',
  'numeric',
  'numeric',
  'numeric',
  'numeric',
  'numeric',
  'numeric',
  'numeric',
  'numeric',
  'numeric',
];
const columnNulable = [
  'NO',
  'NO',
  'NO',
  'NO',
  'NO',
  'NO',
  'YES',
  'YES',
  'YES',
  'YES',
  'YES',
  'YES',
  'YES',
  'YES',
  'YES',
  'YES',
  'YES',
  'YES',
  'YES',
  'YES',
  'YES',
  'YES',
  'YES',
  'YES',
  'YES',
  'YES',
  'YES',
  'YES',
  'YES',
  'YES',
  'YES',
  'YES',
  'YES',
  'YES',
  'YES',
  'YES',
  'YES',
  'YES',
  'YES',
  'YES',
  'YES',
  'YES',
  'YES',
  'YES',
];
describe('create ticker time frame table', () => {
  test('creates a table named correctly with colums', async () => {
    const client = await db.connect();
    try {
      client.query('BEGIN');

      await createTickerTimeFrameTable('time_frame_table_test');
      await client
        .query(
          `SELECT *
      FROM information_schema.columns
     WHERE table_schema = 'public'
       AND table_name   = 'time_frame_table_test'
         ;`
        )
        .then(data => {
          expect(data.rows.map(column => column.column_name).sort()).toEqual(
            columnNames.sort()
          );
        });
      await dropTable('time_frame_table_test');
      await client.query('ROLLBACK');
    } finally {
      client.release();
    }
  }, 10000);

  test('creates a table with correct data types', async () => {
    const client = await db.connect();
    try {
      client.query('BEGIN');

      await createTickerTimeFrameTable('time_frame_table_test');
      await client
        .query(
          `SELECT *
      FROM information_schema.columns
     WHERE table_schema = 'public'
       AND table_name   = 'time_frame_table_test'
         ;`
        )
        .then(data => {
          expect(data.rows.map(column => column.data_type)).toEqual(
            columnTypes
          );
        });
      await dropTable('time_frame_table_test');
      await client.query('ROLLBACK');
    } finally {
      client.release();
    }
  }, 10000);
  test('creates a table with the correct mandatory not null', async () => {
    const client = await db.connect();
    try {
      client.query('BEGIN');

      await createTickerTimeFrameTable('time_frame_table_test');
      await client
        .query(
          `SELECT *
      FROM information_schema.columns
     WHERE table_schema = 'public'
       AND table_name   = 'time_frame_table_test'
         ;`
        )
        .then(data => {
          expect(data.rows.map(column => column.is_nullable)).toEqual(
            columnNulable
          );
        });
      await dropTable('time_frame_table_test');
      await client.query('ROLLBACK');
    } finally {
      client.release();
    }
  }, 1000);
});
