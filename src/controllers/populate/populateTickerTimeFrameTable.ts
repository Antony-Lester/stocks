import db from '../../db/connection';
import {dataPointBaseType} from '../../db/data/test-data';
import createTickerTimeFrameTable from '../create/createTickerTimeFrameTable';

export default async function populateTickerTimeFrameTable(
  name: string,
  populateTickerTimeFrameTableData: dataPointBaseType
) {
  const populateTickerTimeFrameTableQueryStr = `INSERT INTO ${name} 
  (timestamp, open, high, low, close, vol)
  VALUES (
    '${populateTickerTimeFrameTableData.timestamp}',
    ${populateTickerTimeFrameTableData.open},
    ${populateTickerTimeFrameTableData.high},
    ${populateTickerTimeFrameTableData.low},
    ${populateTickerTimeFrameTableData.close},
    ${populateTickerTimeFrameTableData.vol}
  );`;
  const populateTickerTimeFrameTablePromise = db
    .query(populateTickerTimeFrameTableQueryStr)
    .catch(async e => {
      if (e.code === '23502' || e.code === '42601' || e.code === '23505') {
        Promise.resolve(null);
      } else if (e.code === '42P01') {
        await createTickerTimeFrameTable(name);
        await populateTickerTimeFrameTable(
          name,
          populateTickerTimeFrameTableData
        );
      } else {
        console.error(e);
      }
    });

  return await Promise.all([populateTickerTimeFrameTablePromise]);
}
