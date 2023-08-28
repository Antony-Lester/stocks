export const dataPointResult = {
  timestamp: '2020-01-01T01:01:01.001Z',
  result_long_1: 1,
  result_long_2: 0.333333329,
  result_long_3: 0.899999996,
  result_long_4: 0.766666663,
  result_long_5: 0.73333333,
  result_real_1: 0.699999997,
  result_real_2: 0.666666664,
  result_real_3: 0.5,
  result_real_4: 0.400000002,
  result_real_5: 0.383333335,
  result_short_1: 0.366666668,
  result_short_2: 0.200000001,
  result_short_3: 0.133333334,
  result_short_4: 0.066666666,
  result_short_5: 0.0,
};

export interface dataPointResultType {
  timestamp: string;
  result_long_1?: number | null;
  result_long_2?: number | null;
  result_long_3?: number | null;
  result_long_4?: number | null;
  result_long_5?: number | null;
  result_real_1?: number | null;
  result_real_2?: number | null;
  result_real_3?: number | null;
  result_real_4?: number | null;
  result_real_5?: number | null;
  result_short_1?: number | null;
  result_short_2?: number | null;
  result_short_3?: number | null;
  result_short_4?: number | null;
  result_short_5?: number | null;
}
