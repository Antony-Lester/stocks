import {timeFrames} from '../../db/data/values';
import readTickersTable from '../read/readTickersTable';

export async function generateTickerTimeFrameTableNames(
  filter: Array<string> | string | null = null
) {
  try {
    return readTickersTable().then(data =>
      data
        ?.map(item =>
          timeFrames.map(time => `${item.exchange}_${item.ticker}_${time}`)
        )
        .reduce((accumulator, value) => accumulator.concat(value), [])
        .filter(ticker => !ticker?.includes('.'))
        .sort()
        .filter(ticker => {
          if (typeof filter === 'string') {
            return ticker.includes(filter);
          } else if (Array.isArray(filter)) {
            return filter.some(item => ticker.includes(item));
          } else {
            return true;
          }
        })
    );
  } catch {
    return null;
  }
}
