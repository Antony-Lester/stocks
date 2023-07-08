// eslint-disable-next-line node/no-unpublished-import, node/no-extraneous-import
import {describe, expect, test} from '@jest/globals';
import adx from '../../metrics/adx';

describe('td metric', () => {
  const high = [0, 25, 50];
  const low = [0, 10, 20];
  const close = [0, 20, 30];
  const diff = 0.5;
  const off = 10;

  const invailed = [0, NaN, 25];

  test('returns a number', () => {
    expect(typeof adx(high, low, close)).toBe('number');
  });
  test('returns a valid result', () => {
    expect(adx(high, low, close)).toBe(1);
  });
  test('range control works', () => {
    expect(adx(high, low, close, diff)).toBe(0.5);
  });
  test('offset control works', () => {
    expect(adx(high, low, close, diff, off)).toBe(10.5);
  });
  test('returns nan for invalid data', () => {
    expect(isNaN(adx(invailed, low, close))).toBe(true);
    expect(isNaN(adx(high, invailed, close))).toBe(true);
    expect(isNaN(adx(high, low, invailed))).toBe(true);
  });
});
