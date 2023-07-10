// eslint-disable-next-line node/no-unpublished-import, node/no-extraneous-import
import {describe, expect, test, afterEach} from '@jest/globals';
import createTickersTable from '../../../controllers/create/createTickersTable';

import db from '../../../db/connection';
import dropTable from '../../../controllers/drop/dropTable';
const columnNames = [
  'ticker',
  'exchange',
  'class',
  'name',
  'id',
  'status',
  'tradable',
  'marginable',
  'shortable',
  'easy_to_borrow',
  'fractionable',
  'maintenance_margin_requirement',
  'min_order_size',
  'min_trade_increment',
  'price_increment',
];
const columnTypes = [
  'text',
  'text',
  'text',
  'text',
  'text',
  'text',
  'boolean',
  'boolean',
  'boolean',
  'boolean',
  'boolean',
  'numeric',
  'numeric',
  'numeric',
  'numeric',
];
const columnDefaults = [
  null,
  null,
  null,
  null,
  null,
  null,
  'false',
  'false',
  'false',
  'false',
  'false',
  '100',
  null,
  null,
  null,
];
const columnNulable = [
  'NO',
  'NO',
  'YES',
  'YES',
  'NO',
  'YES',
  'YES',
  'YES',
  'YES',
  'YES',
  'YES',
  'YES',
  'YES',
  'YES',
  'YES',
];

afterEach(async () => {
  await dropTable('tickers');
});

describe('create tickers table', () => {
  test('creates a table named tickers with named colums', async () => {
    const client = await db.connect();
    try {
      client.query('BEGIN');

      await createTickersTable();
      await client
        .query(
          `SELECT *
      FROM information_schema.columns
     WHERE table_schema = 'public'
       AND table_name   = 'tickers'
         ;`
        )
        .then(data => {
          expect(data.rows.map(column => column.column_name)).toEqual(
            columnNames
          );
        });

      await client.query('ROLLBACK');
    } finally {
      client.release();
    }
  });
  test('creates a table with correct data types', async () => {
    const client = await db.connect();
    try {
      client.query('BEGIN');

      await createTickersTable();
      await client
        .query(
          `SELECT *
      FROM information_schema.columns
     WHERE table_schema = 'public'
       AND table_name   = 'tickers'
         ;`
        )
        .then(data => {
          expect(data.rows.map(column => column.data_type)).toEqual(
            columnTypes
          );
        });

      await client.query('ROLLBACK');
    } finally {
      client.release();
    }
  });
  test('creates a table with the correct defaults', async () => {
    const client = await db.connect();
    try {
      client.query('BEGIN');

      await createTickersTable();
      await client
        .query(
          `SELECT *
      FROM information_schema.columns
     WHERE table_schema = 'public'
       AND table_name   = 'tickers'
         ;`
        )
        .then(data => {
          expect(data.rows.map(column => column.column_default)).toEqual(
            columnDefaults
          );
        });

      await client.query('ROLLBACK');
    } finally {
      client.release();
    }
  });
  test('creates a table with the correct mandatory not null', async () => {
    const client = await db.connect();
    try {
      client.query('BEGIN');

      await createTickersTable();
      await client
        .query(
          `SELECT *
      FROM information_schema.columns
     WHERE table_schema = 'public'
       AND table_name   = 'tickers'
         ;`
        )
        .then(data => {
          expect(data.rows.map(column => column.is_nullable)).toEqual(
            columnNulable
          );
        });

      await client.query('ROLLBACK');
    } finally {
      client.release();
    }
  });
});
