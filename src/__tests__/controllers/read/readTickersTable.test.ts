// eslint-disable-next-line node/no-unpublished-import, node/no-extraneous-import
import {describe, expect, test, afterAll} from '@jest/globals';
import createTickersTable from '../../../controllers/create/createTickersTable';

import db from '../../../db/connection';
import populateTickersTable from '../../../controllers/populate/populateTickersTable';
import {tickersData} from '../../../db/data/development-data/index';
import dropTable from '../../../controllers/drop/dropTable';
import readTickersTable from '../../../controllers/read/readTickersTable';
const firstRow = {
  class: 'us_equity',
  easy_to_borrow: false,
  exchange: 'OTC',
  fractionable: false,
  id: '5705d3df-6129-4f20-99d2-f616e1699618',
  maintenance_margin_requirement: 100,
  marginable: false,
  min_order_size: 999,
  min_trade_increment: 888,
  name: 'LMP AUTOMOTIVE HLDGS INC Common Stock',
  price_increment: 777,
  shortable: false,
  status: 'active',
  ticker: 'LMPX',
  tradable: false,
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
      await populateTickersTable(tickersData);
      await readTickersTable().then(data => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        expect(data[0]).toEqual(firstRow);
      });
      await dropTable('tickers');
      client.query('ROLLBACK');
    } finally {
      client.release();
    }
  }, 10000);
});
