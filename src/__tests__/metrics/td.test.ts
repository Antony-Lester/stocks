// eslint-disable-next-line node/no-unpublished-import, node/no-extraneous-import
import {describe, expect, test} from '@jest/globals';
import td from '../../metrics/td';

describe('td metric', () => {
  const high = 100;
  const low = 50;
  const close = 100;
  const open = 50;
  const diff = 0.5;
  const off = 10;

  const invaild = NaN;

  test('returns a object', () => {
    expect(typeof td(high, low, close, open)).toBe('object');
  });
  test('return contains 2 keys', () => {
    expect(Object.entries(td(high, low, close, open)).length).toBe(2);
  });
  test('keys named R & S', () => {
    expect(Object.keys(td(high, low, close, open))).toEqual(['R', 'S']);
  });
  test('returns a valid result', () => {
    expect(td(high, low, close, open)).toEqual({R: 0.2, S: 0.3333333333333333});
  });
  test('range control works', () => {
    expect(td(high, low, close, open, diff)).toEqual({
      R: 0.1,
      S: 0.16666666666666666,
    });
  });
  test('offset control works', () => {
    expect(td(high, low, close, open, diff, off)).toEqual({
      R: 10.1,
      S: 9.833333333333334,
    });
  });
  test('returns nan if passed a non valid high metric', () => {
    expect(td(invaild, low, close, open)).toEqual({R: NaN, S: NaN});
  });
  test('returns nan if passed a non valid low metric', () => {
    expect(td(high, invaild, close, open)).toEqual({R: NaN, S: NaN});
  });
  test('returns nan if passed a non valid close metric', () => {
    expect(td(high, low, invaild, open)).toEqual({R: NaN, S: NaN});
  });
  test('returns nan if passed a non valid open metric', () => {
    expect(td(high, low, close, invaild)).toEqual({R: NaN, S: NaN});
  });
});
