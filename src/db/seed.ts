import format from 'pg-format';
import db from './connection';
import {devDataInterface} from './data/development-data';

export default async function (data: devDataInterface) {
  const {tickersData} = data;

  //=========== Drop Tables ====================================================
  const tickersTablePromiseDrop = db
    .query('DROP TABLE IF EXISTS tickers;')
    .catch(e => console.error(e));

  await Promise.all([tickersTablePromiseDrop]);

  //=========== Create Tables ==================================================
  const tickersTablePromiseCreate = db
    .query(
      `CREATE TABLE tickers (
      ticker VARCHAR PRIMARY KEY,
      exchange VARCHAR,
      class VARCHAR,
      name VARCHAR,
      id VARCHAR,
      status VARCHAR,
      tradable BOOLEAN,
      marginable BOOLEAN,
      shortable BOOLEAN,
      easy_to_borrow BOOLEAN,
      fractionable BOOLEAN,
      maintenance_margin_requirement INT
      );`
    )
    .catch(e => console.error(e));

  await Promise.all([tickersTablePromiseCreate]);

  //=========== Populate Tables ================================================
  const tickersInsertQueryStr = format(
    `INSERT INTO tickers (
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
      maintenance_margin_requirement
      ) VALUES %L RETURNING * ;`,
    tickersData.map(data => [
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
    ])
  );

  const tickersTablePromiseInsert = db
    .query(tickersInsertQueryStr)
    .then(result => result.rows)
    // eslint-disable-next-line node/no-unsupported-features/node-builtins
    .then(result => console.table(result))
    .catch(e => console.error(e));

  await Promise.all([tickersTablePromiseInsert]);
}
