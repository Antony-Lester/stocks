import devData, {DataInterface} from './data/development-data/index';
import seed from './seed';
//import db from './connection';

export const runSeed = async (data: DataInterface) => {
  await seed(data);
  //return await db.end();
};

runSeed(devData);
