// eslint-disable-next-line node/no-unpublished-import, node/no-extraneous-import
import {describe, expect, test} from '@jest/globals';
import fpp from '../../metrics/fpp';

describe('td metric', () => {
  const high = 50;
  const low = 0;
  const close = 50;
  const invaild = NaN;
  const diff = 0.5;
  const off = 10;
  test('returns a object', () => {
    expect(typeof fpp(high, low, close)).toBe('object');
  });
  test('keys named R.. & S..', () => {
    expect(Object.keys(fpp(high, low, close))).toEqual([
      'S3',
      'S2',
      'S1',
      'R1',
      'R2',
      'R3',
    ]);
  });
  test('returns a valid result', () => {
    expect(fpp(high, low, close)).toEqual({
      R1: 0.25000000000000006,
      R2: 0.4000000000000001,
      R3: 0.625,
      S1: 0.6666666666666665,
      S2: 1.333333333333333,
      S3: 2.333333333333333,
    });
  });
  test('range control works', () => {
    expect(fpp(high, low, close, diff)).toEqual({
      R1: 0.12500000000000003,
      R2: 0.20000000000000004,
      R3: 0.3125,
      S1: 0.33333333333333326,
      S2: 0.6666666666666665,
      S3: 1.1666666666666665,
    });
  });
  test('offset control works', () => {
    expect(fpp(high, low, close, diff, off)).toEqual({
      R1: 10.125,
      R2: 10.2,
      R3: 10.3125,
      S1: 10.333333333333334,
      S2: 10.666666666666666,
      S3: 11.166666666666666,
    });
  });
  test('returns nan if passed a non valid high metric', () => {
    expect(fpp(invaild, low, close)).toEqual({
      R1: NaN,
      R2: NaN,
      R3: NaN,
      S1: NaN,
      S2: NaN,
      S3: NaN,
    });
  });
  test('returns nan if passed a non valid low metric', () => {
    expect(fpp(high, invaild, close)).toEqual({
      R1: NaN,
      R2: NaN,
      R3: NaN,
      S1: NaN,
      S2: NaN,
      S3: NaN,
    });
  });
  test('returns nan if passed a non valid close metric', () => {
    expect(fpp(high, low, invaild)).toEqual({
      R1: NaN,
      R2: NaN,
      R3: NaN,
      S1: NaN,
      S2: NaN,
      S3: NaN,
    });
  });
});
