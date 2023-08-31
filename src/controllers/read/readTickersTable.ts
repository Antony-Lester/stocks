import db from '../../db/connection';
import {tickersDataInterface} from '../../db/data/test-data';

export default async function readTickersTable(): Promise<
  tickersDataInterface | undefined
> {
  try {
    return await db
      .query('SELECT * FROM tickers;')
      .then(data => data.rows)
      .then(data => (data.length ? data : undefined));
  } catch {
    return undefined;
  }
}
