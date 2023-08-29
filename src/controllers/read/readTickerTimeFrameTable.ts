import db from '../../db/connection';
import {tickersDataInterface} from '../../db/data/development-data';

export default async function readTickerTimeFrameTable(
  name: string
): Promise<tickersDataInterface | null> {
  try {
    return await db
      .query(`SELECT * FROM ${name}`)
      .then(data => data.rows)
      .then(data => {
        if (data.length) {
          for (const [, v] of Object.entries(data)) {
            for (const [x] of Object.entries(v)) {
              if (numberkeys.includes(x)) {
                v[x] = parseFloat(v[x]);
              } else {
                v[x] = v[x].toISOString();
              }
            }
          }
          return data;
        } else {
          return null;
        }
      });
  } catch {
    return null;
  }
}

const numberkeys: Array<string> = [
  'close',
  'high',
  'low',
  'metric_adx',
  'metric_cp_r1',
  'metric_cp_r2',
  'metric_cp_r3',
  'metric_cp_s1',
  'metric_cp_s2',
  'metric_cp_s3',
  'metric_di_minus',
  'metric_di_plus',
  'metric_eom',
  'metric_fpp_r1',
  'metric_fpp_r2',
  'metric_fpp_r3',
  'metric_fpp_s1',
  'metric_fpp_s2',
  'metric_fpp_s3',
  'metric_mfi',
  'metric_rsi',
  'metric_sar',
  'metric_sc',
  'metric_td_r',
  'metric_td_s',
  'metric_time',
  'open',
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
  'vol',
];
