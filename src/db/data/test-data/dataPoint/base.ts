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

export const dataPointBaseTestArray = [
  {
    timestamp: '2020-01-01T01:01:01.001Z',
    open: 17.63,
    high: 17.63,
    low: 16,
    close: 16.5,
    vol: 35586.0,
  },
  {
    timestamp: '2020-01-01T01:01:01.001Z',
    open: 16.61,
    high: 16.81,
    low: 14.8,
    close: 14.92,
    vol: 63653.0,
  },
  {
    timestamp: '2020-01-01T01:01:01.001Z',
    open: 15.14,
    high: 16.72,
    low: 14.5,
    close: 16.05,
    vol: 52253.0,
  },
  {
    timestamp: '2020-01-01T01:01:01.001Z',
    open: 15.7,
    high: 16.87,
    low: 14.53,
    close: 14.65,
    vol: 23096.0,
  },
  {
    timestamp: '2020-01-01T01:01:01.001Z',
    open: 14.7,
    high: 14.7,
    low: 12.45,
    close: 13.88,
    vol: 70482.0,
  },
  {
    timestamp: '2020-01-01T01:01:01.001Z',
    open: 14.2,
    high: 14.2,
    low: 12.91,
    close: 13.01,
    vol: 21090.0,
  },
  {
    timestamp: '2020-01-01T01:01:01.001Z',
    open: 12.8,
    high: 13.41,
    low: 12.25,
    close: 12.63,
    vol: 29730.0,
  },
  {
    timestamp: '2020-01-01T01:01:01.001Z',
    open: 12.75,
    high: 13.1,
    low: 12.0,
    close: 12.5,
    vol: 163290.0,
  },
  {
    timestamp: '2020-01-01T01:01:01.001Z',
    open: 12.25,
    high: 12.84,
    low: 12.25,
    close: 12.4,
    vol: 15226.0,
  },
  {
    timestamp: '2020-01-01T01:01:01.001Z',
    open: 12.22,
    high: 12.41,
    low: 10.37,
    close: 11.34,
    vol: 206863.0,
  },
  {
    timestamp: '2020-01-01T01:01:01.001Z',
    open: 11.2,
    high: 14.62,
    low: 11.2,
    close: 13.6,
    vol: 69889.0,
  },
  {
    timestamp: '2020-01-01T01:01:01.001Z',
    open: 13.89,
    high: 15.3,
    low: 13.025,
    close: 14.27,
    vol: 82588.0,
  },
  {
    timestamp: '2020-01-01T01:01:01.001Z',
    open: 14.39,
    high: 14.85,
    low: 13.8,
    close: 13.96,
    vol: 55811.0,
  },
  {
    timestamp: '2020-01-01T01:01:01.001Z',
    open: 13.46,
    high: 15.42,
    low: 13.46,
    close: 14.59,
    vol: 69825.0,
  },
  {
    timestamp: '2020-01-01T01:01:01.001Z',
    open: 15.09,
    high: 16.0,
    low: 14.94,
    close: 15.35,
    vol: 62425.0,
  },
  {
    timestamp: '2020-01-01T01:01:01.001Z',
    open: 15.51,
    high: 16.96,
    low: 15.51,
    close: 16.56,
    vol: 102770.0,
  },
  {
    timestamp: '2020-01-01T01:01:01.001Z',
    open: 16.93,
    high: 19.53,
    low: 16.43,
    close: 19.06,
    vol: 81285.0,
  },
  {
    timestamp: '2020-01-01T01:01:01.001Z',
    open: 19.25,
    high: 20.48,
    low: 18.39,
    close: 20.3,
    vol: 4291.0,
  },
  {
    timestamp: '2020-01-01T01:01:01.001Z',
    open: 20.01,
    high: 20.27,
    low: 17.23,
    close: 18.01,
    vol: 65763.0,
  },
  {
    timestamp: '2020-01-01T01:01:01.001Z',
    open: 18.18,
    high: 19.95,
    low: 17.62,
    close: 19.44,
    vol: 67441.0,
  },
  {
    timestamp: '2020-01-01T01:01:01.001Z',
    open: 19.33,
    high: 19.61,
    low: 17.42,
    close: 17.55,
    vol: 58601.0,
  },
  {
    timestamp: '2020-01-01T01:01:01.001Z',
    open: 16.44,
    high: 20.04,
    low: 16.41,
    close: 20.01,
    vol: 51174.0,
  },
  {
    timestamp: '2020-01-01T01:01:01.001Z',
    open: 20.0,
    high: 22.26,
    low: 19.51,
    close: 19.92,
    vol: 47436.0,
  },
  {
    timestamp: '2020-01-01T01:01:01.001Z',
    open: 19.7,
    high: 20.88,
    low: 18.88,
    close: 19.97,
    vol: 51004.0,
  },
  {
    timestamp: '2020-01-01T01:01:01.001Z',
    open: 19.43,
    high: 19.44,
    low: 15.14,
    close: 15.48,
    vol: 94497.0,
  },
  {
    timestamp: '2020-01-01T01:01:01.001Z',
    open: 15.96,
    high: 17.25,
    low: 14.63,
    close: 15.68,
    vol: 62663.0,
  },
  {
    timestamp: '2020-01-01T01:01:01.001Z',
    open: 15.5,
    high: 17.0,
    low: 14.86,
    close: 16.82,
    vol: 72686.0,
  },
  {
    timestamp: '2020-01-01T01:01:01.001Z',
    open: 16.65,
    high: 17.75,
    low: 15.92,
    close: 16.47,
    vol: 72686.0,
  },
];
