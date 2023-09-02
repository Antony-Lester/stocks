import db from '../../db/connection';
import {dataPointBaseType} from '../../db/data/test-data';
import createTickerTimeFrameTable from '../create/createTickerTimeFrameTable';

export default async function populateTickerTimeFrameTable(
  name: string,
  data: dataPointBaseType
) {
  const populateTickerTimeFrameTableQueryStr = `INSERT INTO ${name} 
  (timestamp, open, high, low, close, vol)
  VALUES (
    '${data.timestamp.replace(/'/g, '"')}',
    ${data.open},
    ${data.high},
    ${data.low},
    ${data.close},
    ${data.vol}
  );`;
  const populateTickerTimeFrameTablePromise = db
    .query(populateTickerTimeFrameTableQueryStr)
    .catch(async e => {
      if (e.code === '23502' || e.code === '42601' || e.code === '23505') {
        Promise.resolve(null);
      } else if (e.code === '42P01') {
        await createTickerTimeFrameTable(name);
        await populateTickerTimeFrameTable(name, data);
      } else {
        console.error(e);
      }
    });

  return await Promise.all([populateTickerTimeFrameTablePromise]);
}
