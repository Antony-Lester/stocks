import devData, {devDataInterface} from './data/development-data/index';
import seed from './seed';
//import db from './connection';

export const runSeed = async (data: devDataInterface) => {
  await seed(data);
  //return await db.end();
};

runSeed(devData);
