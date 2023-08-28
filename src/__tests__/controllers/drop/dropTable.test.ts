// eslint-disable-next-line node/no-unpublished-import, node/no-extraneous-import
import {describe, expect, test} from '@jest/globals';
import createTickersTable from '../../../controllers/create/createTickersTable';

import db from '../../../db/connection';
import dropTable from '../../../controllers/drop/dropTable';

const noColumns: unknown = [];

describe('drop table', () => {
  test('drops a table', async () => {
    const client = await db.connect();
    try {
      client.query('BEGIN');

      await createTickersTable();
      await dropTable('tickers');
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
            noColumns
          );
        });

      //await client.query('ROLLBACK');
    } finally {
      client.release();
    }
  }, 10000);
  test('handles request if table dosent exist', async () => {
    const client = await db.connect();
    try {
      client.query('BEGIN');

      await dropTable('tickers');
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
            noColumns
          );
        });

      await client.query('ROLLBACK');
    } finally {
      client.release();
    }
  }, 10000);
});
