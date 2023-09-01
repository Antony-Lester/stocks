import {generateTickerTimeFrameTableNames} from './generateTickerTimeFrameTableNames';
import readTickerTimeFrameTable from '../read/readTickerTimeFrameTable';
import generateTickerTimeFrameApiCallsInital from './generateTickerTimeFrameApiCallsInital';
import generateTickerTimeFrameApiCallsMissing from './generateTickerTimeFrameApiCallsInitalMissing';

export default async function generateTickerTimeFrameApiCalls(): Promise<
  [string, string, string][] | null
> {
  const apiCalls: [string, string, string][] | null = [];
  const tickerTimeFrameTableNames = await generateTickerTimeFrameTableNames();
  if (!tickerTimeFrameTableNames) {
    console.warn('No tickerTimeFrameTableNames');
    return null;
  }
  for await (const tickerTimeFrameTableName of tickerTimeFrameTableNames) {
    const start: string | null = null;
    const end: string | null = null;
    const table = await readTickerTimeFrameTable(tickerTimeFrameTableName);
    if (table) {
      const missingDataCalls = await generateTickerTimeFrameApiCallsMissing(
        tickerTimeFrameTableName
      );
      if (missingDataCalls) {
        apiCalls.push(...missingDataCalls);
      }
    }
    if (!start || !end) {
      const initalCalls = await generateTickerTimeFrameApiCallsInital(
        tickerTimeFrameTableName
      );
      if (initalCalls) {
        apiCalls.push(...initalCalls);
      }
    }
  }
  return apiCalls.sort();
}
