export const dataPointMetric = {
  timestamp: '2020-01-01T01:01:01.001Z',
  metric_adx: 0.0,
  metric_di_minus: 0.045454545,
  metric_di_plus: 0.090909091,
  metric_eom: 0.136363635,
  metric_mfi: 0.18181818,
  metric_rsi: 0.227272725,
  metric_sar: 0.27272727,
  metric_sc: 0.318181815,
  metric_time: 0.36363636,
  metric_cp_s3: 0.409090905,
  metric_cp_s2: 0.45454545,
  metric_cp_s1: 0.499999995,
  metric_cp_r1: 0.54545454,
  metric_cp_r2: 0.590909085,
  metric_cp_r3: 0.63636363,
  metric_fpp_s3: 0.681818175,
  metric_fpp_s2: 0.72727272,
  metric_fpp_s1: 0.772727265,
  metric_fpp_r1: 0.81818181,
  metric_fpp_r2: 0.863636355,
  metric_fpp_r3: 0.9090909,
  metric_td_s: 0.954545445,
  metric_td_r: 1.0,
};
export interface dataPointMetricType {
  timestamp: string;
  metric_adx?: number | null;
  metric_di_minus?: number | null;
  metric_di_plus?: number | null;
  metric_eom?: number | null;
  metric_mfi?: number | null;
  metric_rsi?: number | null;
  metric_sar?: number | null;
  metric_sc?: number | null;
  metric_time?: number | null;
  metric_cp_s3?: number | null;
  metric_cp_s2?: number | null;
  metric_cp_s1?: number | null;
  metric_cp_r1?: number | null;
  metric_cp_r2?: number | null;
  metric_cp_r3?: number | null;
  metric_fpp_s3?: number | null;
  metric_fpp_s2?: number | null;
  metric_fpp_s1?: number | null;
  metric_fpp_r1?: number | null;
  metric_fpp_r2?: number | null;
  metric_fpp_r3?: number | null;
  metric_td_r?: number | null;
  metric_td_s?: number | null;
}
