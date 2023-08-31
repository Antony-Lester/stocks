import db from '../../db/connection';
import {tickersDataInterface} from '../../db/data/test-data';

export default async function readTickersTable(): Promise<
  tickersDataInterface | undefined
> {
  try {
    return await db
      .query('SELECT * FROM tickers;')
      .then(data => data.rows)
      .then(data =>
        data.map(ticker => {
          ticker.maintenance_margin_requirement = parseFloat(
            ticker?.maintenance_margin_requirement
          );
          ticker.min_order_size = parseFloat(ticker?.min_order_size);
          ticker.min_trade_increment = parseFloat(ticker?.min_trade_increment);
          ticker.price_increment = parseFloat(ticker?.price_increment);
          return ticker;
        })
      )
      .then(data => (data.length ? data : undefined));
  } catch {
    return undefined;
  }
}
