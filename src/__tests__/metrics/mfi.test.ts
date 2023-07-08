// eslint-disable-next-line node/no-unpublished-import, node/no-extraneous-import
import {describe, expect, test} from '@jest/globals';
import mfi from '../../metrics/mfi';

describe('td metric', () => {
  const high = [0, 25, 50];
  const low = [0, 10, 20];
  const close = [0, 20, 30];
  const volume = [0, 100, 200];
  const diff = 0.5;
  const off = 10;

  const invailed = [0, NaN, 25];

  test('returns a number', () => {
    expect(typeof mfi(high, low, close, volume)).toBe('number');
  });
  test('returns a valid result', () => {
    expect(mfi(high, low, close, volume)).toBe(611.1111111111111);
  });
  test('range control works', () => {
    expect(mfi(high, low, close, volume, diff)).toBe(305.55555555555554);
  });
  test('offset control works', () => {
    expect(mfi(high, low, close, volume, diff, off)).toBe(315.55555555555554);
  });
  test('returns nan for invalid data', () => {
    expect(isNaN(mfi(invailed, low, close, volume))).toBe(true);
    expect(isNaN(mfi(high, invailed, close, volume))).toBe(true);
    expect(isNaN(mfi(high, low, invailed, volume))).toBe(true);
    expect(isNaN(mfi(high, low, close, invailed))).toBe(true);
  });
});
