import db from '../../db/connection';

export default async function createTickersTable() {
  return await db
    .query(
      `CREATE TABLE IF NOT EXISTS tickers (
        ticker CHAR NOT NULL,
        exchange CHAR NOT NULL,
        class CHAR,
        name VARCHAR,
        id CHAR PRIMARY KEY,
        status CHAR,
        tradable BOOLEAN DEFAULT false,
        marginable BOOLEAN DEFAULT false,
        shortable BOOLEAN DEFAULT false,
        easy_to_borrow BOOLEAN DEFAULT false,
        fractionable BOOLEAN DEFAULT false,
        maintenance_margin_requirement DECIMAL  DEFAULT 100,
        min_order_size DECIMAL,
        min_trade_increment DECIMAL,
        price_increment DECIMAL
        );`
    )
    .catch(e => console.warn(e));
}
