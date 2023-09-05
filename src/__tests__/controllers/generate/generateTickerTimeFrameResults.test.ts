// eslint-disable-next-line node/no-unpublished-import, node/no-extraneous-import
import {describe, expect, test} from '@jest/globals';
import {dataPointBaseTestArray} from '../../../db/data/development-data';
import generateTickerTimeFrameResults from '../../../controllers/generate/generateTickerTimeFrameResults';

describe('generateTickerTimeFrameResults', () => {
  test('returns a object', async () => {
    const result = await generateTickerTimeFrameResults(
      'test',
      dataPointBaseTestArray
    );
    expect(typeof result).toBe('object');
  });
  test('returns with the correct keys', async () => {
    const res = await generateTickerTimeFrameResults(
      'test',
      dataPointBaseTestArray
    );

    if (res) {
      const result = Object.keys(res);
      expect(result.includes('name')).toBe(true);
      expect(result.includes('timestamp')).toBe(true);
      expect(result.includes('result_long_1')).toBe(true);
      expect(result.includes('result_long_2')).toBe(true);
      expect(result.includes('result_long_3')).toBe(true);
      expect(result.includes('result_long_4')).toBe(true);
      expect(result.includes('result_long_5')).toBe(true);
      expect(result.includes('result_real_1')).toBe(true);
      expect(result.includes('result_real_2')).toBe(true);
      expect(result.includes('result_real_3')).toBe(true);
      expect(result.includes('result_real_4')).toBe(true);
      expect(result.includes('result_real_5')).toBe(true);
      expect(result.includes('result_short_1')).toBe(true);
      expect(result.includes('result_short_2')).toBe(true);
      expect(result.includes('result_short_3')).toBe(true);
      expect(result.includes('result_short_4')).toBe(true);
      expect(result.includes('result_short_5')).toBe(true);
    }
  });
  test('returns with the correct values', async () => {
    const result = await generateTickerTimeFrameResults(
      'test',
      dataPointBaseTestArray
    );
    if (result) {
      expect(result.name).toBe('test');
      expect(result.timestamp).toBe('2020-01-01T01:01:01.001Z');
      expect(result.result_long_1).toBe(0.1605218377765172);
      expect(result.result_long_2).toBe(0.17753828701077704);
      expect(result.result_long_3).toBe(0.17583664208735109);
      expect(result.result_long_4).toBe(0.29381735677821896);
      expect(result.result_long_5).toBe(0.2677254679523539);
      expect(result.result_real_1).toBe(0.09575757575757576);
      expect(result.result_real_2).toBe(0.02727272727272723);
      expect(result.result_real_3).toBe(0.1121212121212121);
      expect(result.result_real_4).toBe(0.15878787878787873);
      expect(result.result_real_5).toBe(0.21151515151515152);
      expect(result.result_short_1).toBe(-0.05062499999999992);
      expect(result.result_short_2).toBe(-0.04499999999999993);
      expect(result.result_short_3).toBe(-0.05437500000000006);
      expect(result.result_short_4).toBe(0.08125000000000004);
      expect(result.result_short_5).toBe(0.11250000000000004);
    }
  });
});
