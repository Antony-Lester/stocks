import db from '../../db/connection';
import {tickersDataInterface} from '../../db/data/development-data';

export default async function readTickersTable(): Promise<tickersDataInterface | null> {
  try {
    return await db
      .query('SELECT * FROM tickers')
      .then(data => data.rows)
      .then(data => (data.length ? data : null));
  } catch {
    return null;
  }
}
