// eslint-disable-next-line node/no-unpublished-import, node/no-extraneous-import
import {describe, expect, test} from '@jest/globals';
import eom from '../../metrics/eom';

describe('eom metric', () => {
  const high = [1, 25, 50];
  const low = [0, 10, 20];
  const volume = [1, 100, 200];
  const diff = 0.5;
  const off = 10;

  const invailed = [0, NaN, 25];

  test('returns a number', () => {
    expect(typeof eom(high, low, volume)).toBe('number');
  });
  test('returns a valid result', () => {
    expect(eom(high, low, volume)).toBe(0.8385416666666666);
  });
  test('range control works', () => {
    expect(eom(high, low, volume, diff)).toBe(0.4192708333333333);
  });
  test('offset control works', () => {
    expect(eom(high, low, volume, diff, off)).toBe(10.419270833333334);
  });
  test('returns nan for invalid data', () => {
    expect(isNaN(eom(invailed, low, volume))).toBe(true);
    expect(isNaN(eom(high, invailed, volume))).toBe(true);
    expect(isNaN(eom(high, low, invailed))).toBe(true);
  });
});
