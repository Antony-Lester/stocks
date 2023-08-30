// eslint-disable-next-line node/no-unpublished-import, node/no-extraneous-import
import {describe, expect, test} from '@jest/globals';

import db from '../../../db/connection';
import {generateTickerTimeFrameTableNames} from '../../../controllers/generate/generateTickerTimeFrameTableNames';
import createTickersTable from '../../../controllers/create/createTickersTable';
import populateTickersTable from '../../../controllers/populate/populateTickersTable';
import {tickersData} from '../../../db/data/test-data';
import dropTable from '../../../controllers/drop/dropTable';

const correctResult = [
  'AAAAA_AAAAA_1Min',
  'AAAAA_AAAAA_5Min',
  'AAAAA_AAAAA_30Min',
  'AAAAA_AAAAA_2Hour',
  'AAAAA_AAAAA_1Day',
  'BBB_BBBB_1Min',
  'BBB_BBBB_5Min',
  'BBB_BBBB_30Min',
  'BBB_BBBB_2Hour',
  'BBB_BBBB_1Day',
  'OTCxxxxxxxxxx_CAJPYxxxxxxxxxxx_1Min',
  'OTCxxxxxxxxxx_CAJPYxxxxxxxxxxx_5Min',
  'OTCxxxxxxxxxx_CAJPYxxxxxxxxxxx_30Min',
  'OTCxxxxxxxxxx_CAJPYxxxxxxxxxxx_2Hour',
  'OTCxxxxxxxxxx_CAJPYxxxxxxxxxxx_1Day',
];

describe('generateTickerTimeFrameTableNames', () => {
  test('returns array of timeframes', async () => {
    const client = await db.connect();
    try {
      client.query('BEGIN');
      await createTickersTable();
      await populateTickersTable(tickersData);
      const result = await generateTickerTimeFrameTableNames();
      expect(Array.isArray(result)).toBe(true);
      await dropTable('tickers');
      await client.query('ROLLBACK');
    } finally {
      client.release();
    }
  }, 10000);
  test('results are in A-Z order', async () => {
    const client = await db.connect();
    try {
      client.query('BEGIN');
      await createTickersTable();
      await populateTickersTable(tickersData);
      const result = await generateTickerTimeFrameTableNames();
      expect(result).toEqual(correctResult.sort());
      await dropTable('tickers');
      await client.query('ROLLBACK');
    } finally {
      client.release();
    }
  }, 10000);
  test('can filter by single exchange string', async () => {
    const client = await db.connect();
    try {
      client.query('BEGIN');
      await createTickersTable();
      await populateTickersTable(tickersData);
      const result = await generateTickerTimeFrameTableNames('OTCxxxxxxxxxx');
      expect(result).toEqual(correctResult.slice(10).sort());
      await dropTable('tickers');
      client.query('ROLLBACK');
    } finally {
      client.release();
    }
  }, 10000);
  test('can filter by single ticker string', async () => {
    const client = await db.connect();
    try {
      client.query('BEGIN');
      await createTickersTable();
      await populateTickersTable(tickersData);
      const result = await generateTickerTimeFrameTableNames('AAAAA');
      expect(result).toEqual(correctResult.slice(0, 5).sort());
      await dropTable('tickers');
      client.query('ROLLBACK');
    } finally {
      client.release();
    }
  }, 10000);
  test('can filter by single timeframe string', async () => {
    const client = await db.connect();
    try {
      client.query('BEGIN');
      await createTickersTable();
      await populateTickersTable(tickersData);
      const result = await generateTickerTimeFrameTableNames('1Min');
      expect(result).toEqual(
        [correctResult[1], correctResult[6], correctResult[11]].sort()
      );
      await dropTable('tickers');
      client.query('ROLLBACK');
    } finally {
      client.release();
    }
  }, 10000);
  test('can filter by mutiple exchange array', async () => {
    const client = await db.connect();
    try {
      client.query('BEGIN');
      await createTickersTable();
      await populateTickersTable(tickersData);
      const result = await generateTickerTimeFrameTableNames([
        'OTCxxxxxxxxxx',
        'BBB',
      ]);
      expect(result).toEqual(correctResult.slice(5).sort());
      await dropTable('tickers');
      client.query('ROLLBACK');
    } finally {
      client.release();
    }
  }, 10000);
  test('can filter by mutiple ticker array', async () => {
    const client = await db.connect();
    try {
      client.query('BEGIN');
      await createTickersTable();
      await populateTickersTable(tickersData);
      const result = await generateTickerTimeFrameTableNames([
        'CAJPYxxxxxxxxxxx',
        'BBBB',
      ]);
      expect(result).toEqual(correctResult.slice(5).sort());
      await dropTable('tickers');
      client.query('ROLLBACK');
    } finally {
      client.release();
    }
  }, 10000);
  test('can filter by mutiple timeframe array', async () => {
    const client = await db.connect();
    try {
      client.query('BEGIN');
      await createTickersTable();
      await populateTickersTable(tickersData);
      const result = await generateTickerTimeFrameTableNames(['1Min', '5Min']);
      expect(result).toEqual(
        [
          'AAAAA_AAAAA_1Min',
          'AAAAA_AAAAA_5Min',
          'BBB_BBBB_1Min',
          'BBB_BBBB_5Min',
          'OTCxxxxxxxxxx_CAJPYxxxxxxxxxxx_1Min',
          'OTCxxxxxxxxxx_CAJPYxxxxxxxxxxx_5Min',
        ].sort()
      );
      await dropTable('tickers');
      client.query('ROLLBACK');
    } finally {
      client.release();
    }
  }, 10000);
  test('can use mutiple filters array', async () => {
    const client = await db.connect();
    try {
      client.query('BEGIN');
      await createTickersTable();
      await populateTickersTable(tickersData);
      const result = await generateTickerTimeFrameTableNames(['AAAAA', '5Min']);
      expect(result).toEqual(
        [
          'AAAAA_AAAAA_1Min',
          'AAAAA_AAAAA_5Min',
          'AAAAA_AAAAA_30Min',
          'AAAAA_AAAAA_2Hour',
          'AAAAA_AAAAA_1Day',
          'BBB_BBBB_5Min',
          'OTCxxxxxxxxxx_CAJPYxxxxxxxxxxx_5Min',
        ].sort()
      );
      await dropTable('tickers');
      client.query('ROLLBACK');
    } finally {
      client.release();
    }
  }, 10000);
  test('returns undefined if table missing', async () => {
    const client = await db.connect();
    try {
      client.query('BEGIN');
      const result = await generateTickerTimeFrameTableNames();
      expect(result).toBe(undefined);
      client.query('ROLLBACK');
    } finally {
      client.release();
    }
  }, 10000);
  test('returns undefined if table is empty', async () => {
    const client = await db.connect();
    try {
      client.query('BEGIN');
      await createTickersTable();
      const result = await generateTickerTimeFrameTableNames();
      expect(result).toBe(undefined);
      await dropTable('tickers');
      client.query('ROLLBACK');
    } finally {
      client.release();
    }
  }, 10000);
});
