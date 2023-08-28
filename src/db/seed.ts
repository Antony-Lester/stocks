import {tickersDataInterface} from './data/development-data';
import createTickersTable from '../controllers/create/createTickersTable';

export default async function (data: tickersDataInterface) {
  //=== Drop Tables =====

  //=== Create Tables ===
  await Promise.all([createTickersTable]);

  //=== Populate Tables =
}
