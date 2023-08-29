import {timeFrames} from '../../db/data/values';
import readTickersTable from '../read/readTickersTable';

export async function generateTickerTimeFrameTableNames() {
  try {
    return readTickersTable().then(data =>
      data
        ?.map(item =>
          timeFrames.map(time => `${item.exchange}_${item.ticker}_${time}`)
        )
        .reduce((accumulator, value) => accumulator.concat(value), [])
    );
  } catch {
    return null;
  }
}
