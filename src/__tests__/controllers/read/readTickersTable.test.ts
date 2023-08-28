// eslint-disable-next-line node/no-unpublished-import, node/no-extraneous-import
import {describe, expect, test, afterAll} from '@jest/globals';
import createTickersTable from '../../../controllers/create/createTickersTable';

import db from '../../../db/connection';
import populateTickersTable from '../../../controllers/populate/populateTickersTable';
import data from '../../../db/data/test-data/index';
import dropTable from '../../../controllers/drop/dropTable';
import readTickersTable from '../../../controllers/read/readTickersTable';
const firstRow = {
  ticker: 'AAAAA',
  exchange: 'AAAAA',
  class: null,
  name: null,
  id: '111111',
  status: null,
  tradable: false,
  marginable: false,
  shortable: false,
  easy_to_borrow: false,
  fractionable: false,
  maintenance_margin_requirement: null,
  min_order_size: null,
  min_trade_increment: null,
  price_increment: null,
};

afterAll(async () => {
  await dropTable('tickers');
});

describe('read tickers table', () => {
  test('returns rows of tickers table', async () => {
    const client = await db.connect();
    try {
      client.query('BEGIN');

      await createTickersTable();
      await populateTickersTable([data.tickersData[0]]);
      await readTickersTable().then(data => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        expect(data).toEqual([firstRow]);
      });
      await dropTable('tickers');
      await client.query('ROLLBACK');
    } finally {
      client.release();
    }
  }, 10000);
  test('returns null if table missing', async () => {
    const client = await db.connect();
    try {
      client.query('BEGIN');
      await readTickersTable().then(data => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        expect(data).toBe(null);
      });
      await dropTable('tickers');
      await client.query('ROLLBACK');
    } finally {
      client.release();
    }
  }, 10000);
  test('returns null if table is empty', async () => {
    const client = await db.connect();
    try {
      client.query('BEGIN');
      await createTickersTable();
      await readTickersTable().then(data => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        expect(data).toBe(null);
      });
      await dropTable('tickers');
      await client.query('ROLLBACK');
    } finally {
      client.release();
    }
  }, 10000);
});
