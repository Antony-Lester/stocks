import db from '../../db/connection';
import {dataPointResultType} from '../../db/data/test-data';

export default async function populateTickerTimeFrameTable(
  name: string,
  data: dataPointResultType
) {
  const populateTickerTimeFrameTableQueryStr = `UPDATE ${name} 
  SET 
    result_long_1 = ${data.result_long_1},
    result_long_2 = ${data.result_long_2},
    result_long_3 = ${data.result_long_3},
    result_long_4 = ${data.result_long_4},
    result_long_5 = ${data.result_long_5},
    result_real_1 = ${data.result_real_1},
    result_real_2 = ${data.result_real_2},
    result_real_3 = ${data.result_real_3},
    result_real_4 = ${data.result_real_4},
    result_real_5 = ${data.result_real_5},
    result_short_1 = ${data.result_short_1},
    result_short_2 = ${data.result_short_2},
    result_short_3 = ${data.result_short_3},
    result_short_4 = ${data.result_short_4},
    result_short_5 = ${data.result_short_5}
  WHERE
    timestamp = '${data.timestamp}'
  ;`;
  const populateTickerTimeFrameTablePromise = db
    .query(populateTickerTimeFrameTableQueryStr)
    .catch(async e => {
      if (e.code === '23502' || e.code === '42601' || e.code === '23505') {
        Promise.resolve(null);
      } else {
        console.error(e);
      }
    });

  return await Promise.all([populateTickerTimeFrameTablePromise]);
}
