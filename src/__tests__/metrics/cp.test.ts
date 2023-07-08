// eslint-disable-next-line node/no-unpublished-import, node/no-extraneous-import
import {describe, expect, test} from '@jest/globals';
import cp from '../../metrics/cp';

describe('cp metric', () => {
  const high = 50;
  const low = 0;
  const close = 40;
  const invaild = NaN;
  const diff = 0.5;
  const off = 10;
  test('returns a object', () => {
    expect(typeof cp(high, low, close)).toBe('object');
  });
  test('keys named R.. & S..', () => {
    expect(Object.keys(cp(high, low, close))).toEqual([
      'S3',
      'S2',
      'S1',
      'R1',
      'R2',
      'R3',
    ]);
  });
  test('returns a valid result', () => {
    expect(cp(high, low, close)).toEqual({
      R1: 0.10280373831775706,
      R2: 0.18644067796610178,
      R3: 0.2558139534883721,
      S1: 0.12941176470588242,
      S2: 0.29729729729729737,
      S3: 0.5238095238095238,
    });
  });
  test('range control works', () => {
    expect(cp(high, low, close, diff)).toEqual({
      R1: 0.05140186915887853,
      R2: 0.09322033898305089,
      R3: 0.12790697674418605,
      S1: 0.06470588235294121,
      S2: 0.14864864864864868,
      S3: 0.2619047619047619,
    });
  });
  test('offset control works', () => {
    expect(cp(high, low, close, diff, off)).toEqual({
      R1: 10.051401869158878,
      R2: 10.09322033898305,
      R3: 10.127906976744185,
      S1: 9.935294117647059,
      S2: 9.85135135135135,
      S3: 9.738095238095237,
    });
  });
  test('returns nan if passed a non valid high metric', () => {
    expect(cp(invaild, low, close)).toEqual({
      R1: NaN,
      R2: NaN,
      R3: NaN,
      S1: NaN,
      S2: NaN,
      S3: NaN,
    });
  });
  test('returns nan if passed a non valid low metric', () => {
    expect(cp(high, invaild, close)).toEqual({
      R1: NaN,
      R2: NaN,
      R3: NaN,
      S1: NaN,
      S2: NaN,
      S3: NaN,
    });
  });
  test('returns nan if passed a non valid close metric', () => {
    expect(cp(high, low, invaild)).toEqual({
      R1: NaN,
      R2: NaN,
      R3: NaN,
      S1: NaN,
      S2: NaN,
      S3: NaN,
    });
  });
});
