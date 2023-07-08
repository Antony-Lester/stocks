// eslint-disable-next-line node/no-unpublished-import, node/no-extraneous-import
import {describe, expect, test} from '@jest/globals';
import sc from '../../metrics/sc';

describe('td metric', () => {
  const close = [0, 50, 100];
  const diff = 0.5;
  const off = 10;

  test('returns a number', () => {
    expect(typeof sc(close)).toBe('number');
  });
  test('returns a valid result', () => {
    expect(sc(close)).toBe(1);
  });
  test('range control works', () => {
    expect(sc(close, diff)).toBe(0.5);
  });
  test('offset control works', () => {
    expect(sc(close, diff, off)).toBe(10.5);
  });
});
