import * as Moment from 'moment';
import {extendMoment} from 'moment-range';

const moment = extendMoment(Moment);

import readTickerTimeFrameTable from '../read/readTickerTimeFrameTable';
import generateTickerTimeFrameApiCallsInital from './generateTickerTimeFrameApiCallsInital';

export default async function generateTickerTimeFrameApiCallsInitalMissing(
  name: string
) {
  const apiCalls: [string, string, string][] = [];
  const expectedTimeStamps = await generateTickerTimeFrameApiCallsInital(name);
  if (!expectedTimeStamps) {
    console.warn('No expectedTimeStamps @ApiCallsMissing', name);
    return null;
  }
  const table = await readTickerTimeFrameTable(name);
  if (!table) {
    console.warn('No table @ApiCallsMissing', name);
    return null;
  }
  const actualTimeStamps = table.map(row => row.timestamp);

  for (const expectedTimeStamp of expectedTimeStamps) {
    const [name, start, end] = expectedTimeStamp;
    const range = moment.range(new Date(start), new Date(end));
    if (
      !actualTimeStamps.some(timestamp => range.contains(new Date(timestamp)))
    ) {
      apiCalls.push([name, start, end]);
    }
  }
  return apiCalls.sort();
}
