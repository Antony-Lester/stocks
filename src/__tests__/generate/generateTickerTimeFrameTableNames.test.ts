// eslint-disable-next-line node/no-unpublished-import, node/no-extraneous-import
import {describe, test} from '@jest/globals';

import db from '../../db/connection';
import {generateTickerTimeFrameTableNames} from '../../controllers/generate/generateTickerTimeFrameTableNames';
import createTickersTable from '../../controllers/create/createTickersTable';
import populateTickersTable from '../../controllers/populate/populateTickersTable';
import {tickersData} from '../../db/data/test-data';

describe('read tickers table', () => {
  test('returns rows of tickers table', async () => {
    const client = await db.connect();
    try {
      client.query('BEGIN');
      await createTickersTable();
      await populateTickersTable(tickersData);
      const result = await generateTickerTimeFrameTableNames();
      console.log(result);
      client.query('ROLLBACK');
    } finally {
      client.release();
    }
  }, 10000);
});
