export const dataPointBase = {
  timestamp: '2020-01-01T01:01:01.001Z',
  open: 1.0,
  high: 2.5,
  low: 1.0,
  close: 2.0,
  vol: 1000.0,
};

export interface dataPointBaseType {
  timestamp: string;
  open: number;
  high: number;
  low: number;
  close: number;
  vol: number;
}

export interface dataPointInterface {
  timestamp: string;
  open: number;
  high: number;
  low: number;
  close: number;
  vol: number;
  metric_adx?: number;
  metric_di_minus?: number;
  metric_di_plus?: number;
  metric_eom?: number;
  metric_mfi?: number;
  metric_rsi?: number;
  metric_sar?: number;
  metric_sc?: number;
  metric_time?: number;
  metric_cp_s3?: number;
  metric_cp_s2?: number;
  metric_cp_s1?: number;
  metric_cp_r1?: number;
  metric_cp_r2?: number;
  metric_cp_r3?: number;
  metric_fpp_s3?: number;
  metric_fpp_s2?: number;
  metric_fpp_s1?: number;
  metric_fpp_r1?: number;
  metric_fpp_r2?: number;
  metric_fpp_r3?: number;
  metric_td_r?: number;
  metric_td_s?: number;
  result_long_1?: number;
  result_long_2?: number;
  result_long_3?: number;
  result_long_4?: number;
  result_long_5?: number;
  result_real_1?: number;
  result_real_2?: number;
  result_real_3?: number;
  result_real_4?: number;
  result_real_5?: number;
  result_short_1?: number;
  result_short_2?: number;
  result_short_3?: number;
  result_short_4?: number;
  result_short_5?: number;
}
export type dataPointsInterface = Array<dataPointInterface>;
