import db from '../../db/connection';

export default async function createTickerTimeFrameTable(name: string) {
  const query = `CREATE TABLE IF NOT EXISTS ${name.replace(/"/g, "'")} (
    timestamp TIMESTAMP WITH TIME ZONE PRIMARY KEY,
    open DECIMAL NOT NULL,
    low DECIMAL NOT NULL,
    high DECIMAL NOT NULL,
    close DECIMAL NOT NULL,
    vol DECIMAL NOT NULL,
    metric_adx DECIMAL,
    metric_di_minus DECIMAL,
    metric_di_plus DECIMAL,
    metric_eom DECIMAL,
    metric_mfi DECIMAL,
    metric_rsi DECIMAL,
    metric_sar DECIMAL,
    metric_sc  DECIMAL,
    metric_time DECIMAL,
    metric_cp_s3 DECIMAL,
    metric_cp_s2 DECIMAL,
    metric_cp_s1 DECIMAL,
    metric_cp_r1 DECIMAL,
    metric_cp_r2 DECIMAL,
    metric_cp_r3 DECIMAL,
    metric_fpp_s3 DECIMAL,
    metric_fpp_s2 DECIMAL,
    metric_fpp_s1 DECIMAL,
    metric_fpp_r1 DECIMAL,
    metric_fpp_r2 DECIMAL,
    metric_fpp_r3 DECIMAL,
    metric_td_r DECIMAL,
    metric_td_s DECIMAL,
    result_long_1 DECIMAL,
    result_long_2 DECIMAL,
    result_long_3 DECIMAL,
    result_long_4 DECIMAL,
    result_long_5 DECIMAL,
    result_real_1 DECIMAL,
    result_real_2 DECIMAL,
    result_real_3 DECIMAL,
    result_real_4 DECIMAL,
    result_real_5 DECIMAL,
    result_short_1 DECIMAL,
    result_short_2 DECIMAL,
    result_short_3 DECIMAL,
    result_short_4 DECIMAL,
    result_short_5 DECIMAL
    );`;

  return await db.query(query).catch(e => {
    console.error(e);
    return null;
  });
}
