// eslint-disable-next-line node/no-unpublished-import, node/no-extraneous-import
import {describe, expect, test} from '@jest/globals';
import {generateTickerNames} from '../../../controllers/generate/generateTickerNames';
import db from '../../../db/connection';
import createTickersTable from '../../../controllers/create/createTickersTable';
import populateTickersTable from '../../../controllers/populate/populateTickersTable';
import dropTable from '../../../controllers/drop/dropTable';
import {tickersData} from '../../../db/data/development-data/index';
describe('generate ticker names', () => {
  test('returns a array of strings or undefined', async () => {
    const client = await db.connect();
    try {
      client.query('BEGIN');
      await createTickersTable();
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      await populateTickersTable(tickersData);
      const result = await generateTickerNames();
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      expect(result).toBeInstanceOf(Array);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      expect(typeof result[0]).toBe('string');
      await dropTable('tickers');
      client.query('ROLLBACK');
    } finally {
      client.release();
    }
  });
  test('returns all ticker names by default', async () => {
    const client = await db.connect();
    try {
      client.query('BEGIN');
      await createTickersTable();
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      await populateTickersTable(tickersData);
      const result = await generateTickerNames();
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      expect(result.length).toBe(68);
      await dropTable('tickers');
      client.query('ROLLBACK');
    } finally {
      client.release();
    }
  });
  test('can filter by tradable', async () => {
    const client = await db.connect();
    try {
      client.query('BEGIN');
      await createTickersTable();
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      await populateTickersTable(tickersData);
      const result = await generateTickerNames({tradable: true});
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      expect(result.length).toBe(1);
      await dropTable('tickers');
      client.query('ROLLBACK');
    } finally {
      client.release();
    }
  });
  test('can filter by shortable', async () => {
    const client = await db.connect();
    try {
      client.query('BEGIN');
      await createTickersTable();
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      await populateTickersTable(tickersData);
      const result = await generateTickerNames({shortable: true});
      expect(result?.length).toBe(4);
      await dropTable('tickers');
      client.query('ROLLBACK');
    } finally {
      client.release();
    }
  });
  test('can filter by exchange', async () => {
    const client = await db.connect();
    try {
      client.query('BEGIN');
      await createTickersTable();
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      await populateTickersTable(tickersData);
      const result = await generateTickerNames({exchange: 'NASDAQ'});
      expect(result?.length).toBe(2);
      await dropTable('tickers');
      client.query('ROLLBACK');
    } finally {
      client.release();
    }
  });
  test('can filter by marginable', async () => {
    const client = await db.connect();
    try {
      client.query('BEGIN');
      await createTickersTable();
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      await populateTickersTable(tickersData);
      const result = await generateTickerNames({marginable: true});
      expect(result?.length).toBe(2);
      await dropTable('tickers');
      client.query('ROLLBACK');
    } finally {
      client.release();
    }
  });
  test('can filter by easyToBorrow', async () => {
    const client = await db.connect();
    try {
      client.query('BEGIN');
      await createTickersTable();
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      await populateTickersTable(tickersData);
      const result = await generateTickerNames({easyToBorrow: true});
      expect(result?.length).toBe(4);
      await dropTable('tickers');
      client.query('ROLLBACK');
    } finally {
      client.release();
    }
  });
  test('can filter by fractionable', async () => {
    const client = await db.connect();
    try {
      client.query('BEGIN');
      await createTickersTable();
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      await populateTickersTable(tickersData);
      const result = await generateTickerNames({fractionable: true});
      expect(result?.length).toBe(9);
      await dropTable('tickers');
      client.query('ROLLBACK');
    } finally {
      client.release();
    }
  });
  test('can filter by fractionable', async () => {
    const client = await db.connect();
    try {
      client.query('BEGIN');
      await createTickersTable();
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      await populateTickersTable(tickersData);
      const result = await generateTickerNames({fractionable: true});
      expect(result?.length).toBe(9);
      await dropTable('tickers');
      client.query('ROLLBACK');
    } finally {
      client.release();
    }
  });
  test('can filter by status', async () => {
    const client = await db.connect();
    try {
      client.query('BEGIN');
      await createTickersTable();
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      await populateTickersTable(tickersData);
      const result = await generateTickerNames({status: 'active'});
      expect(result?.length).toBe(68);
      await dropTable('tickers');
      client.query('ROLLBACK');
    } finally {
      client.release();
    }
  });
  test('can filter by tradable and status', async () => {
    const client = await db.connect();
    try {
      client.query('BEGIN');
      await createTickersTable();
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      await populateTickersTable(tickersData);
      const result = await generateTickerNames({
        tradable: true,
        status: 'active',
      });
      expect(result?.length).toBe(1);
      await dropTable('tickers');
      client.query('ROLLBACK');
    } finally {
      client.release();
    }
  });
  test('can filter by shortable and easyToBorrow', async () => {
    const client = await db.connect();
    try {
      client.query('BEGIN');
      await createTickersTable();
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      await populateTickersTable(tickersData);
      const result = await generateTickerNames({
        shortable: true,
        easyToBorrow: true,
      });
      expect(result?.length).toBe(4);
      await dropTable('tickers');
      client.query('ROLLBACK');
    } finally {
      client.release();
    }
  });
  test('if no results are found, returns undefined', async () => {
    const client = await db.connect();
    try {
      client.query('BEGIN');
      await createTickersTable();
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      await populateTickersTable();
      const result = await generateTickerNames({tradable: false});
      expect(result).toBe(undefined);
      await dropTable('tickers');
      client.query('ROLLBACK');
    } finally {
      client.release();
    }
  });
  test('sorts by ticker name by default', async () => {
    const client = await db.connect();
    try {
      client.query('BEGIN');
      await createTickersTable();
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      await populateTickersTable(tickersData);
      const result = await generateTickerNames();
      expect(result?.[0]).toBe('ACHHY');
      expect(result?.[1]).toBe('ADXS');
      expect(result?.[2]).toBe('AFIIQ');
      expect(result?.[3]).toBe('ALFIQ');
      expect(result?.[4]).toBe('ALJJ');
      await dropTable('tickers');
      client.query('ROLLBACK');
    } finally {
      client.release();
    }
  });
  test('sorts by maintenance_margin_requirement asending', async () => {
    const client = await db.connect();
    try {
      client.query('BEGIN');
      await createTickersTable();
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      await populateTickersTable(tickersData);
      const result = await generateTickerNames({
        sortBy: 'maintenance_margin_requirement',
      });
      expect(result?.[0]).toBe('OMH');
      expect(result?.[1]).toBe('JZXN');
      expect(result?.[2]).toBe('SIVPQ');
      expect(result?.[3]).toBe('PKBO');
      expect(result?.[4]).toBe('SIVBQ');
      await dropTable('tickers');
      client.query('ROLLBACK');
    } finally {
      client.release();
    }
  });
  test('sorts by min_order_size asending', async () => {
    const client = await db.connect();
    try {
      client.query('BEGIN');
      await createTickersTable();
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      await populateTickersTable(tickersData);
      const result = await generateTickerNames({sortBy: 'min_order_size'});
      expect(result?.[0]).toBe('SIVPQ');
      expect(result?.[1]).toBe('PKBO');
      expect(result?.[2]).toBe('SIVBQ');
      expect(result?.[3]).toBe('RIDEQ');
      expect(result?.[4]).toBe('CLVSQ');
      await dropTable('tickers');
      client.query('ROLLBACK');
    } finally {
      client.release();
    }
  });
});
