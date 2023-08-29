import db from '../../db/connection';
import {dataPointMetricType} from '../../db/data/test-data';

export default async function populateTickerTimeFrameTable(
  name: string,
  data: dataPointMetricType
) {
  const populateTickerTimeFrameTableQueryStr = `UPDATE ${name} 
  SET 
    metric_adx = ${data.metric_adx},
    metric_di_minus = ${data.metric_di_minus},
    metric_di_plus = ${data.metric_di_plus},
    metric_eom = ${data.metric_eom},
    metric_mfi = ${data.metric_mfi},
    metric_rsi = ${data.metric_rsi},
    metric_sar = ${data.metric_sar},
    metric_sc = ${data.metric_sc},
    metric_time = ${data.metric_time},
    metric_cp_s3 = ${data.metric_cp_s3},
    metric_cp_s2 = ${data.metric_cp_s2},
    metric_cp_s1 = ${data.metric_cp_s1},
    metric_cp_r1 = ${data.metric_cp_r1},
    metric_cp_r2 = ${data.metric_cp_r2},
    metric_cp_r3 = ${data.metric_cp_r3},
    metric_fpp_s3 = ${data.metric_fpp_s3},
    metric_fpp_s2 = ${data.metric_fpp_s2},
    metric_fpp_s1 = ${data.metric_fpp_s1},
    metric_fpp_r1 = ${data.metric_fpp_r1},
    metric_fpp_r2 = ${data.metric_fpp_r2},
    metric_fpp_r3 = ${data.metric_fpp_r3},
    metric_td_s = ${data.metric_td_s},
    metric_td_r = ${data.metric_td_r}
  WHERE
    timestamp = '${data.timestamp}'
  ;`;
  const populateTickerTimeFrameTablePromise = db
    .query(populateTickerTimeFrameTableQueryStr)
    .catch(async e => {
      if (e.code === '23502' || e.code === '42601' || e.code === '23505') {
        Promise.resolve(null);
      } else {
        console.error(e);
      }
    });

  return await Promise.all([populateTickerTimeFrameTablePromise]);
}
