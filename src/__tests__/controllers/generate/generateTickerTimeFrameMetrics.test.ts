// eslint-disable-next-line node/no-unpublished-import, node/no-extraneous-import
import {describe, expect, test} from '@jest/globals';
import {dataPointMetric} from '../../../db/data/test-data';
import generateTickerTimeFrameMetrics from '../../../controllers/generate/generateTickerTimeFrameMetrics';

describe('generateTickerTimeFrameMetrics', () => {
  const input = Array(28).fill(dataPointMetric);
  test('returns a object', async () => {
    const result = await generateTickerTimeFrameMetrics('test', input);
    expect(typeof result).toBe('object');
  });
  test('returns with the correct keys', async () => {
    const result = await generateTickerTimeFrameMetrics('test', input);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(Object.keys(result)).toEqual([
      'name',
      'timestamp',
      'metric_adx_a',
      'metric_adx_b',
      'metric_di_minus_a',
      'metric_di_minus_b',
      'metric_di_plus_a',
      'metric_di_plus_b',
      'metric_eom_a',
      'metric_eom_b',
      'metric_mfi_a',
      'metric_mfi_b',
      'metric_rsi_a',
      'metric_rsi_b',
      'metric_sar_a',
      'metric_sar_b',
      'metric_sc_a',
      'metric_sc_b',
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
    ]);
  });
  test('returns with the correct values', async () => {
    const result = await generateTickerTimeFrameMetrics('test', input);
    expect(result).toEqual({
      name: 'test',
      timestamp: 'test',
      metric_adx_a: 0.0,
      metric_adx_b: 0.0,
      metric_di_minus_a: 0.0,
      metric_di_minus_b: 0.0,
      metric_di_plus_a: 0.0,
      metric_di_plus_b: 0.0,
      metric_eom_a: 0.0,
      metric_eom_b: 0.0,
      metric_mfi_a: 0.0,
      metric_mfi_b: 0.0,
      metric_rsi_a: 0.0,
      metric_rsi_b: 0.0,
      metric_sar_a: 0.0,
      metric_sar_b: 0.0,
      metric_sc_a: 0.0,
      metric_sc_b: 0.0,
      metric_time: 0.0,
      metric_cp_s3: 0.0,
      metric_cp_s2: 0.0,
      metric_cp_s1: 0.0,
      metric_cp_r1: 0.0,
      metric_cp_r2: 0.0,
      metric_cp_r3: 0.0,
      metric_fpp_s3: 0.0,
      metric_fpp_s2: 0.0,
      metric_fpp_s1: 0.0,
      metric_fpp_r1: 0.0,
      metric_fpp_r2: 0.0,
      metric_fpp_r3: 0.0,
      metric_td_r: 0.0,
      metric_td_s: 0.0,
    });
  });
});
