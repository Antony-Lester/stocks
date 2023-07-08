// eslint-disable-next-line node/no-unpublished-import, node/no-extraneous-import
import {describe, expect, test} from '@jest/globals';
import sar from '../../metrics/sar';

describe('td metric', () => {
  const high = [50, 75, 125];
  const low = [0, 25, 75];
  const close = [0, 50, 100];
  const diff = 0.5;
  const off = 10;
  const invailed = [0, NaN, 25];
  test('returns a number', () => {
    expect(typeof sar(high, low, close)).toBe('number');
  });
  test('returns a valid result', () => {
    expect(sar(high, low, close)).toBe(1);
  });
  test('range control works', () => {
    expect(sar(high, low, close, diff)).toBe(0.5);
  });
  test('offset control works', () => {
    expect(sar(high, low, close, diff, off)).toBe(10.5);
  });
  test('returns nan for invalid data', () => {
    expect(isNaN(sar(invailed, low, close))).toBe(true);
    expect(isNaN(sar(high, invailed, close))).toBe(true);
    expect(isNaN(sar(high, low, invailed))).toBe(true);
  });
});
