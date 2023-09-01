//write rate limit function here
import downloadTickerTimeFrame from '../download/downloadTickerTimeFrame';
import {rateLimit} from '../secrets';

export let apiCallsWaiting = 0;
export let apiCallsFailed = 0;
export let apiCallsSuccesfull = 0;

export const apiCallsTotal =
  apiCallsWaiting + apiCallsFailed + apiCallsSuccesfull;
export const apiCallsCompleted = apiCallsFailed + apiCallsSuccesfull;
export const apiCallsSuccessRate = apiCallsSuccesfull / apiCallsCompleted;
export const apiCallsProgressRate = apiCallsCompleted / apiCallsTotal;

export default async function rateLimitTickerTimeFrame(
  TickerTimeFrameCalls: Array<[string, Date, Date]>
) {
  apiCallsWaiting = TickerTimeFrameCalls.length;

  for await (const apiCall of TickerTimeFrameCalls) {
    const [tickerTimeFrameName, start, end] = apiCall;
    await new Promise(resolve => setTimeout(resolve, rateLimit));
    (await downloadTickerTimeFrame(tickerTimeFrameName, start, end))
      ? apiCallsSuccesfull++
      : apiCallsFailed++;
    apiCallsWaiting--;
    console.info(
      'Apicalls-- Progress:',
      apiCallsProgressRate * 100,
      ' Success:',
      apiCallsSuccessRate * 100,
      ' Waiting:',
      apiCallsWaiting
    );
  }
  console.info('Apicalls-- Completed:', apiCallsCompleted);
}
