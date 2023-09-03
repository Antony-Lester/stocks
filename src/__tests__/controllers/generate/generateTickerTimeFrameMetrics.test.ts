/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
// eslint-disable-next-line node/no-unpublished-import, node/no-extraneous-import
import {describe, expect, test} from '@jest/globals';
import generateTickerTimeFrameMetrics from '../../../controllers/generate/generateTickerTimeFrameMetrics';
import {dataPointBaseTestArray} from '../../../db/data/development-data';

describe('generateTickerTimeFrameMetrics', () => {
  test('returns a object', async () => {
    const result = await generateTickerTimeFrameMetrics(
      'test',
      dataPointBaseTestArray
    );
    expect(typeof result).toBe('object');
  });
  test('returns with the correct keys', async () => {
    let result = await generateTickerTimeFrameMetrics(
      'test',
      dataPointBaseTestArray
    );
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    result = Object.keys(result);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(result.includes('name')).toBe(true);
    expect(result.includes('timestamp')).toBe(true);
    expect(result.includes('metric_adx_a')).toBe(true);
    expect(result.includes('metric_adx_b')).toBe(true);
    expect(result.includes('metric_cp_r1')).toBe(true);
    expect(result.includes('metric_cp_r2')).toBe(true);
    expect(result.includes('metric_cp_r3')).toBe(true);
    expect(result.includes('metric_cp_s1')).toBe(true);
    expect(result.includes('metric_cp_s2')).toBe(true);
    expect(result.includes('metric_cp_s3')).toBe(true);
    expect(result.includes('metric_di_minus_a')).toBe(true);
    expect(result.includes('metric_di_minus_b')).toBe(true);
    expect(result.includes('metric_di_plus_a')).toBe(true);
    expect(result.includes('metric_di_plus_b')).toBe(true);
    expect(result.includes('metric_eom_a')).toBe(true);
    expect(result.includes('metric_eom_b')).toBe(true);
    expect(result.includes('metric_fpp_r1')).toBe(true);
    expect(result.includes('metric_fpp_r2')).toBe(true);
    expect(result.includes('metric_fpp_r3')).toBe(true);
    expect(result.includes('metric_fpp_s1')).toBe(true);
    expect(result.includes('metric_fpp_s2')).toBe(true);
    expect(result.includes('metric_fpp_s3')).toBe(true);
    expect(result.includes('metric_mfi_a')).toBe(true);
    expect(result.includes('metric_mfi_b')).toBe(true);
    expect(result.includes('metric_rsi_a')).toBe(true);
    expect(result.includes('metric_rsi_b')).toBe(true);
    expect(result.includes('metric_sar_a')).toBe(true);
    expect(result.includes('metric_sar_b')).toBe(true);
    expect(result.includes('metric_sc_a')).toBe(true);
    expect(result.includes('metric_sc_b')).toBe(true);
    expect(result.includes('metric_td_r')).toBe(true);
    expect(result.includes('metric_td_s')).toBe(true);
    expect(result.includes('metric_time')).toBe(true);
  });
  test('returns with the correct values', async () => {
    const result = await generateTickerTimeFrameMetrics(
      'test',
      dataPointBaseTestArray
    );
    expect(result).toEqual({
      name: 'test',
      timestamp: '2020-01-01T01:01:01.001Z',
      metric_adx_a: 0.5829477858559163,
      metric_adx_b: 2.0330388013830167,
      metric_di_minus_a: 2.96870429950278,
      metric_di_minus_b: 6.591012562178571,
      metric_di_plus_a: 3.2266744662181943,
      metric_di_plus_b: 5.6986763342045395,
      metric_eom_a: 0.00020512763732472358,
      metric_eom_b: 0.00009875731364349929,
      metric_mfi_a: 27.104758502431523,
      metric_mfi_b: 44.476257076291205,
      metric_rsi_a: 0.5289555325749742,
      metric_rsi_b: 0.49952214080917484,
      metric_sar_a: 1.2857142857142858,
      metric_sar_b: 2,
      metric_sc_a: 0.22626262626262605,
      metric_sc_b: 0.5725446428571427,
      metric_time: 0.042,
      metric_cp_s3: 0.03151862464183378,
      metric_cp_s2: 0.020793950850661606,
      metric_cp_s1: 0.01028999064546315,
      metric_cp_r1: 0.010082493125572967,
      metric_cp_r2: 0.019963702359346625,
      metric_cp_r3: 0.029649595687331613,
      metric_fpp_s3: 0.20744788504351333,
      metric_fpp_s2: 0.09633677393240221,
      metric_fpp_s1: 0.04816838696620094,
      metric_fpp_r1: 0.05921553693830934,
      metric_fpp_r2: 0.11181017436634931,
      metric_fpp_r3: 0.19159031413612576,
      metric_td_r: 0.03740502630040915,
      metric_td_s: 0.0778795811518323,
    });
  });
});
