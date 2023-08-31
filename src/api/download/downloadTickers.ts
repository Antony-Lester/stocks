import {tickerDataInterface} from '../../db/data/test-data';
import connection from '../connection';

export default async function getTickers(): Promise<tickerDataInterface[]> {
  return await connection.getAssets();
}
