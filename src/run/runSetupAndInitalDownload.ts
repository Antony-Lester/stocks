import downloadTickers from '../api/download/downloadTickers';
import rateLimitTickerTimeFrame from '../api/rateLimit/rateLimitTickerTimeFrame';
import createTickerTimeFrameTable from '../controllers/create/createTickerTimeFrameTable';
import createTickersTable from '../controllers/create/createTickersTable';
import generateTickerTimeFrameApiCallsInitalMissing from '../controllers/generate/generateTickerTimeFrameApiCallsInitalMissing';
import {generateTickerTimeFrameTableNames} from '../controllers/generate/generateTickerTimeFrameTableNames';
import populateTickersTable from '../controllers/populate/populateTickersTable';

export default async function runSetupAndInitalDownload() {
  await createTickersTable();
  await populateTickersTable(await downloadTickers());
  console.info('Tickers download & save complete.');
  const timeFrameTableNames = await generateTickerTimeFrameTableNames();
  if (timeFrameTableNames) {
    for await (const timeFrameTableName of timeFrameTableNames) {
      await createTickerTimeFrameTable(timeFrameTableName);
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
      console.info(`Inital download for ${timeFrameTableName} complete.`);
    }
  } else {
    console.warn('No timeFrameTableNames @runSetupAndInitalDownload');
  }
  console.info(`Inital download complete for all tickers.`);
}

runSetupAndInitalDownload();
