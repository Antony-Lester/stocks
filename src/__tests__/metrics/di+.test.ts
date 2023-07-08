// eslint-disable-next-line node/no-unpublished-import, node/no-extraneous-import
import {describe, expect, test} from '@jest/globals';
import diPlus from '../../metrics/di+';

describe('diPlus metric', () => {
  const high = [1, 25, 50];
  const low = [0, 10, 20];
  const close = [1, 20, 50];
  const diff = 0.5;
  const off = 10;

  const invailed = [0, NaN, 25];

  test('returns a number', () => {
    expect(typeof diPlus(high, low, close)).toBe('number');
  });
  test('returns a valid result', () => {
    expect(diPlus(high, low, close)).toBe(0.9074074074074074);
  });
  test('range control works', () => {
    expect(diPlus(high, low, close, diff)).toBe(0.4537037037037037);
  });
  test('offset control works', () => {
    expect(diPlus(high, low, close, diff, off)).toBe(10.453703703703704);
  });
  test('returns nan for invalid data', () => {
    expect(isNaN(diPlus(invailed, low, close))).toBe(true);
    expect(isNaN(diPlus(high, invailed, close))).toBe(true);
    expect(isNaN(diPlus(high, low, invailed))).toBe(true);
  });
});
