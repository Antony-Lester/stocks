import {tickersDataInterface} from '../../db/data/development-data';
import db from '../../db/connection';
import format from 'pg-format';
import createTickersTable from '../create/createTickersTable';

export default async function populateTickersTable(
  tickersData: tickersDataInterface
) {
  const populateTickersTableQueryStr = `INSERT INTO tickers (
        ticker,
        exchange,
        class,
        name,
        id,
        status,
        tradable,
        marginable,
        shortable,
        easy_to_borrow,
        fractionable,
        maintenance_margin_requirement,
        min_order_size,
        min_trade_increment,
        price_increment
        ) VALUES %L RETURNING * ;`;

  const populateTickersTableData = tickersData
    .map(data => {
      if (data.symbol === null || data.exchange === null) {
        return null;
      }
      if (typeof data.symbol !== 'string' || data.symbol.length < 2) {
        return null;
      }
      if (typeof data.exchange !== 'string' || data.exchange.length < 2) {
        return null;
      }
      if (typeof data.class !== 'string' || data.class.length < 2) {
        data.class = null;
      }
      if (typeof data.name !== 'string' || data.name.length < 4) {
        data.name = null;
      }
      if (typeof data.id !== 'string') {
        return null;
      }
      if (typeof data.status !== 'string' || data.status.length < 2) {
        data.status = null;
      }
      data.tradable = String(data.tradable).toLowerCase() === 'true';
      if (typeof data.tradable !== 'boolean') {
        data.tradable = false;
      }
      data.marginable = String(data.marginable).toLowerCase() === 'true';
      if (typeof data.marginable !== 'boolean') {
        data.marginable = false;
      }
      data.shortable = String(data.shortable).toLowerCase() === 'true';
      if (typeof data.shortable !== 'boolean') {
        data.shortable = false;
      }
      data.easy_to_borrow =
        String(data.easy_to_borrow).toLowerCase() === 'true';
      if (typeof data.easy_to_borrow !== 'boolean') {
        data.easy_to_borrow = false;
      }
      data.fractionable = String(data.fractionable).toLowerCase() === 'true';
      if (typeof data.fractionable !== 'boolean') {
        data.fractionable = false;
      }
      if (
        data.min_order_size === undefined ||
        data.min_order_size === null ||
        isNaN(data.min_order_size)
      ) {
        data.min_order_size = null;
      }
      if (
        data.min_trade_increment === undefined ||
        data.min_trade_increment === null ||
        isNaN(data.min_trade_increment)
      ) {
        data.min_trade_increment = null;
      }
      if (
        data.price_increment === undefined ||
        data.price_increment === null ||
        isNaN(data.price_increment)
      ) {
        data.price_increment = null;
      }
      return [
        data.symbol,
        data.exchange,
        data.class,
        data.name,
        data.id,
        data.status,
        data.tradable,
        data.marginable,
        data.shortable,
        data.easy_to_borrow,
        data.fractionable,
        data.maintenance_margin_requirement,
        data.min_order_size,
        data.min_trade_increment,
        data.price_increment,
      ];
    })
    .filter(v => v !== null);
  const populateTickersTablePromise = db
    .query(format(populateTickersTableQueryStr, populateTickersTableData))
    .then(r => r.rows)
    .catch(async e => {
      if (e.code === '23502' || e.code === '42601' || e.code === '23505') {
        Promise.resolve(null);
      } else if (e.code === '42P01') {
        await createTickersTable();
        await populateTickersTable(tickersData);
      } else {
        console.error(e);
      }
    });

  await Promise.all([populateTickersTablePromise]);
}
