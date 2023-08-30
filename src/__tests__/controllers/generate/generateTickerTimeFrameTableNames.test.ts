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

describe('read tickers table', () => {
  test('returns rows of tickers table', async () => {
    const client = await db.connect();
    try {
      client.query('BEGIN');
      await createTickersTable();
      await populateTickersTable(tickersData);
      const result = await generateTickerTimeFrameTableNames();
      expect(result).toEqual(correctResult);
      await dropTable('tickers');
      client.query('ROLLBACK');
    } finally {
      client.release();
    }
  }, 10000);
  test('returns null if table missing', async () => {
    const client = await db.connect();
    try {
      client.query('BEGIN');
      const result = await generateTickerTimeFrameTableNames();
      expect(result).toBe(null);
      client.query('ROLLBACK');
    } finally {
      client.release();
    }
  }, 10000);
  test('returns null if table is empty', async () => {
    const client = await db.connect();
    try {
      client.query('BEGIN');
      await createTickersTable();
      const result = await generateTickerTimeFrameTableNames();
      expect(result).toBe(null);
      await dropTable('tickers');
      client.query('ROLLBACK');
    } finally {
      client.release();
    }
  }, 10000);
});
