import db from './connection';

export default async function () {
  await db.query('DROP DATABASE IF EXISTS stocks_test;');
  await db.query('CREATE DATABASE stocks_test;');
  await db.query('DROP DATABASE IF EXISTS stocks;');
  await db.query('CREATE DATABASE stocks;');
}
