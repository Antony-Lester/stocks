import {DataInterface} from './data/development-data';
import createTickersTable from '../controllers/create/createTickersTable';

export default async function (data: DataInterface) {
  const {tickersData} = data;
  //=== Drop Tables =====

  //=== Create Tables ===
  await Promise.all([createTickersTable]);

  //=== Populate Tables =
}
