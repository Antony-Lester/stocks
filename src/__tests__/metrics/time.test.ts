// eslint-disable-next-line node/no-unpublished-import, node/no-extraneous-import
import {describe, expect, test} from '@jest/globals';
import time from '../../metrics/time';

describe('converts date string to 0-1 time metric', () => {
  test('returns a valid metric', () => {
    expect(time('2015-12-22T00:00:00Z')).toBeGreaterThanOrEqual(0);
    expect(time('2015-12-22T23:59:59Z')).toBeLessThanOrEqual(1);
  });
  test('returns nan if passed a non valid metric', () => {
    expect(time('test')).toBe(NaN);
  });
  test('returns nan if passed a empty String', () => {
    expect(time('')).toBe(NaN);
  });
});
