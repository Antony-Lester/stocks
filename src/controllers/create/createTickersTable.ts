import db from '../../db/connection';

export default async function createTickersTable() {
  return await db
    .query(
      `CREATE TABLE IF NOT EXISTS "tickers" (
        ticker TEXT NOT NULL,
        exchange TEXT NOT NULL,
        class TEXT,
        name TEXT,
        id TEXT PRIMARY KEY,
        status TEXT,
        tradable BOOL DEFAULT false,
        marginable BOOL DEFAULT false,
        shortable BOOL DEFAULT false,
        easy_to_borrow BOOL DEFAULT false,
        fractionable BOOL DEFAULT false,
        maintenance_margin_requirement DECIMAL  DEFAULT 100,
        min_order_size DECIMAL,
        min_trade_increment DECIMAL,
        price_increment DECIMAL
        );`
    )
    .catch(e => console.warn(e));
}
