import format from 'pg-format';
import db from './connection';
import {devDataInterface} from './data/development-data';
import createTickersTable from '../controllers/create/createTickersTable';

export default async function (data: devDataInterface) {
  const {tickersData} = data;
  //=== Drop Tables =====

  //=== Create Tables ===
  await Promise.all([createTickersTable]);

  //=== Populate Tables =
}
