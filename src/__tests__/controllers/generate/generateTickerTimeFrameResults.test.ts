// eslint-disable-next-line node/no-unpublished-import, node/no-extraneous-import
import {describe, expect, test} from '@jest/globals';
import {dataPointMetric} from '../../../db/data/test-data';
import generateTickerTimeFrameMetrics from '../../../controllers/generate/generateTickerTimeFrameMetrics';

describe('generateTickerTimeFrameResults', () => {
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
      'result_long_1',
      'result_long_2',
      'result_long_3',
      'result_long_4',
      'result_long_5',
      'result_real_1',
      'result_real_2',
      'result_real_3',
      'result_real_4',
      'result_real_5',
      'result_short_1',
      'result_short_2',
      'result_short_3',
      'result_short_4',
      'result_short_5',
    ]);
  });
  test('returns with the correct values', async () => {
    const result = await generateTickerTimeFrameMetrics('test', input);
    expect(result).toEqual({
      name: 'test',
      timestamp: '2020-01-01T01:01:01.001Z',
      result_long_1: 1.0,
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
    });
  });
});
