import downloadTickers from '../api/download/downloadTickers';
import rateLimitTickerTimeFrame from '../api/rateLimit/rateLimitTickerTimeFrame';
import createTickerTimeFrameTable from '../controllers/create/createTickerTimeFrameTable';
import createTickersTable from '../controllers/create/createTickersTable';
import generateTickerTimeFrameApiCallsInital from '../controllers/generate/generateTickerTimeFrameApiCallsInital';
import generateTickerTimeFrameApiCallsInitalMissing from '../controllers/generate/generateTickerTimeFrameApiCallsInitalMissing';
import {generateTickerTimeFrameTableNames} from '../controllers/generate/generateTickerTimeFrameTableNames';
import populateTickersTable from '../controllers/populate/populateTickersTable';

export default async function runSetupAndInitalDownload() {
  await createTickersTable();
  await populateTickersTable(await downloadTickers());
  console.info('Tickers download & save complete.');
  let timeFrameTableNames = await generateTickerTimeFrameTableNames();
  if (timeFrameTableNames) {
    timeFrameTableNames = timeFrameTableNames.reverse();
    for await (const timeFrameTableName of timeFrameTableNames) {
      const result = await createTickerTimeFrameTable(timeFrameTableName);
      if (result) {
        const apiCallsInital = await generateTickerTimeFrameApiCallsInital(
          timeFrameTableName
        );
        if (apiCallsInital) {
          await rateLimitTickerTimeFrame(apiCallsInital);
        }
      }
    }

    for await (const timeFrameTableName of timeFrameTableNames) {
      do {
        const apiCallsMissing =
          await generateTickerTimeFrameApiCallsInitalMissing(
            timeFrameTableName
          );
        if (apiCallsMissing) {
          await rateLimitTickerTimeFrame(apiCallsMissing);
        }
      } while (
        await generateTickerTimeFrameApiCallsInitalMissing(timeFrameTableName)
      );
    }
  } else {
    console.warn('No timeFrameTableNames @runSetupAndInitalDownload');
  }
}

runSetupAndInitalDownload();
