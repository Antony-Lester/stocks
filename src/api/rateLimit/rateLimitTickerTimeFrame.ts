//write rate limit function here
import downloadTickerTimeFrame from '../download/downloadTickerTimeFrame';

export default async function rateLimitTickerTimeFrame(
  TickerTimeFrameCalls: Array<[string, string, string]>
) {
  let apiCallsWaiting = 1;

  apiCallsWaiting = TickerTimeFrameCalls.length;

  for await (const apiCall of TickerTimeFrameCalls) {
    const [tickerTimeFrameName, start, end] = apiCall;
    await new Promise(resolve =>
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      setTimeout(resolve, process.env.API_RATE_LIMIT)
    );
    await downloadTickerTimeFrame(tickerTimeFrameName, start, end);
    apiCallsWaiting--;
    console.info(
      'Apicalls--',
      tickerTimeFrameName,
      ' Waiting:',
      apiCallsWaiting
    );
  }
  console.info('Apicalls-- Completed');
}
