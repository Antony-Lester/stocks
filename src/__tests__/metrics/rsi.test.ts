// eslint-disable-next-line node/no-unpublished-import, node/no-extraneous-import
import {describe, expect, test} from '@jest/globals';
import rsi from '../../metrics/rsi';

describe('td metric', () => {
  const close = [0, 50, 100];
  const diff = 0.5;
  const off = 10;

  const invailed = [0, NaN, 25];

  test('returns a number', () => {
    expect(typeof rsi(close)).toBe('number');
  });
  test('returns a valid result', () => {
    expect(rsi(close)).toBe(1);
  });
  test('range control works', () => {
    expect(rsi(close, diff)).toBe(0.5);
  });
  test('offset control works', () => {
    expect(rsi(close, diff, off)).toBe(10.5);
  });
  test('returns nan for invalid data', () => {
    expect(isNaN(rsi(invailed))).toBe(true);
  });
});
