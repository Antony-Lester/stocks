// eslint-disable-next-line node/no-unpublished-import, node/no-extraneous-import
import {describe, expect, test, afterAll} from '@jest/globals';
import createTickersTable from '../../../controllers/create/createTickersTable';

import db from '../../../db/connection';
import populateTickersTable from '../../../controllers/populate/populateTickersTable';
import {tickersData} from '../../../db/data/test-data/index';
import dropTable from '../../../controllers/drop/dropTable';
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
const secondRow = {
  class: null,
  easy_to_borrow: false,
  exchange: 'BBB',
  fractionable: false,
  id: '2',
  maintenance_margin_requirement: '20',
  marginable: false,
  min_order_size: null,
  min_trade_increment: null,
  name: 'b name',
  price_increment: null,
  shortable: false,
  status: 'active',
  ticker: 'BBBB',
  tradable: false,
};
const thirdRow = undefined;

afterAll(async () => {
  await dropTable('tickers');
});

describe('populate tickers table', () => {
  test('populates a table named tickers with data provided', async () => {
    const client = await db.connect();
    try {
      client.query('BEGIN');

      await createTickersTable();
      await populateTickersTable([tickersData[0]]);
      await client.query('SELECT * FROM tickers;').then(data => {
        expect(data.rows[0]).toEqual(firstRow);
      });

      await client.query('ROLLBACK');
    } finally {
      client.release();
    }
  }, 10000);
  test('handles null with default values', async () => {
    const client = await db.connect();
    try {
      client.query('BEGIN');

      await createTickersTable();
      await populateTickersTable([tickersData[1]]);
      await client.query('SELECT * FROM tickers;').then(data => {
        expect(data.rows[1]).toEqual(secondRow);
      });

      await client.query('ROLLBACK');
    } finally {
      client.release();
    }
  }, 10000);
  test('handle entries that are null and mandatory', async () => {
    const client = await db.connect();
    try {
      client.query('BEGIN');

      await createTickersTable();
      await populateTickersTable([tickersData[2]]);
      await client.query('SELECT * FROM tickers;').then(data => {
        expect(data.rows[2]).toEqual(thirdRow);
      });

      await client.query('ROLLBACK');
    } finally {
      client.release();
    }
  }, 10000);
});
