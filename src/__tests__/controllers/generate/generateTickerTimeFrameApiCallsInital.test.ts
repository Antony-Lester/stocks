// eslint-disable-next-line node/no-unpublished-import, node/no-extraneous-import
import {describe, expect, test} from '@jest/globals';
import generateTickerTimeFrameApiCallsInital from '../../../controllers/generate/generateTickerTimeFrameApiCallsInital';

describe('generate ticker time frame api calls inital', () => {
  test('returns a array of arrays', async () => {
    const results = await generateTickerTimeFrameApiCallsInital('A_B_1Min');
    expect(Array.isArray(results)).toBe(true);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(Array.isArray(results[0])).toBe(true);
    expect(results?.length).toBe(416);
    expect(results?.[0]).toEqual([
      'A_B_1Min',
      '2014-12-28T00:00:00.000Z',
      '2015-01-03T00:00:00.000Z',
    ]);
    expect(results?.[415]).toEqual([
      'A_B_1Min',
      '2022-12-18T00:00:00.000Z',
      '2022-12-24T00:00:00.000Z',
    ]);
  }, 10000);
});
