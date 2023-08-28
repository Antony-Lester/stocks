import {tickersData, tickersDataInterface} from './data/development-data/index';
import seed from './seed';
//import db from './connection';

export const runSeed = async (tickersData: tickersDataInterface) => {
  await seed(tickersData);
  //return await db.end();
};

runSeed(tickersData);
