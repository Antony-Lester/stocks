// eslint-disable-next-line node/no-unpublished-import, node/no-extraneous-import
import {describe, expect, test} from '@jest/globals';
import diMinus from '../../metrics/di-';

describe('diMinus metric', () => {
  const high = [50, 25, 1];
  const low = [20, 10, 0];
  const close = [50, 20, 1];
  const diff = 0.5;
  const off = 10;

  const invailed = [0, NaN, 25];

  test('returns a number', () => {
    expect(typeof diMinus(high, low, close)).toBe('number');
  });
  test('returns a valid result', () => {
    expect(diMinus(high, low, close)).toBe(0.3333333333333333);
  });
  test('range control works', () => {
    expect(diMinus(high, low, close, diff)).toBe(0.16666666666666666);
  });
  test('offset control works', () => {
    expect(diMinus(high, low, close, diff, off)).toBe(10.166666666666666);
  });
  test('returns nan for invalid data', () => {
    expect(isNaN(diMinus(invailed, low, close))).toBe(true);
    expect(isNaN(diMinus(high, invailed, close))).toBe(true);
    expect(isNaN(diMinus(high, low, invailed))).toBe(true);
  });
});
