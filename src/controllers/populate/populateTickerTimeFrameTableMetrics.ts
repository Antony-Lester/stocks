import db from '../../db/connection';
import {dataPointMetricType} from '../../db/data/test-data';

export default async function populateTickerTimeFrameTable(
  name: string,
  data: dataPointMetricType
) {
  const populateTickerTimeFrameTableQueryStr = `UPDATE ${name} 
  SET 
    metric_adx_a = ${data.metric_adx_a},
    metric_adx_b = ${data.metric_adx_b},
    metric_di_minus_a = ${data.metric_di_minus_a},
    metric_di_minus_b = ${data.metric_di_minus_b},
    metric_di_plus_a = ${data.metric_di_plus_a},
    metric_di_plus_b = ${data.metric_di_plus_b},
    metric_eom_a = ${data.metric_eom_a},
    metric_eom_b = ${data.metric_eom_b},
    metric_mfi_a = ${data.metric_mfi_a},
    metric_mfi_b = ${data.metric_mfi_b},
    metric_rsi_a = ${data.metric_rsi_a},
    metric_rsi_b = ${data.metric_rsi_b},
    metric_sar_a = ${data.metric_sar_a},
    metric_sar_b = ${data.metric_sar_b},
    metric_sc_a = ${data.metric_sc_a},
    metric_sc_b = ${data.metric_sc_b},
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
    timestamp = '${data.timestamp.replace(/'/g, '"')}'
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
