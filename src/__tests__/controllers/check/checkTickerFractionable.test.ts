// eslint-disable-next-line node/no-unpublished-import, node/no-extraneous-import
import {describe, expect, test} from '@jest/globals';

import db from '../../../db/connection';

import {tickersData} from '../../../db/data/development-data';
import createTickersTable from '../../../controllers/create/createTickersTable';
import populateTickersTable from '../../../controllers/populate/populateTickersTable';
import dropTable from '../../../controllers/drop/dropTable';
import checkTickerFractionable from '../../../controllers/check/checkTickerFractionable';

describe('check Ticker Fractionable', () => {
  test('returns Fractionable bool if valid', async () => {
    const client = await db.connect();
    try {
      client.query('BEGIN');

      await createTickersTable();
      await populateTickersTable(tickersData);
      await checkTickerFractionable('CAJPY').then(data => {
        expect(data).toBe(true);
      });
      await dropTable('tickers');
      client.query('ROLLBACK');
    } finally {
      client.release();
    }
  }, 10000);
  test('returns undefined if not valid', async () => {
    const client = await db.connect();
    try {
      client.query('BEGIN');

      await createTickersTable();
      await populateTickersTable(tickersData);
      await checkTickerFractionable('TEST').then(data => {
        expect(data).toBe(undefined);
      });
      await dropTable('tickers');
      client.query('ROLLBACK');
    } finally {
      client.release();
    }
  }, 10000);
});
