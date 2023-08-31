/* eslint-disable no-prototype-builtins */
import readTickersTable from '../read/readTickersTable';

export async function generateTickerNames(params?: {
  shortable?: boolean;
  exchange?: string;
  marginable?: boolean;
  easyToBorrow?: boolean;
  fractionable?: boolean;
  status?: string;
  sortBy?: string;
  tradable?: boolean;
}) {
  return await readTickersTable()
    .then(tickers => {
      if (params) {
        if (params.hasOwnProperty('shortable')) {
          tickers = tickers?.filter(
            ticker => ticker.shortable === params.shortable
          );
        }
        if (params.hasOwnProperty('exchange')) {
          tickers = tickers?.filter(
            ticker => ticker.exchange === params.exchange
          );
        }
        if (params.hasOwnProperty('marginable')) {
          tickers = tickers?.filter(
            ticker => ticker.marginable === params.marginable
          );
        }
        if (params.hasOwnProperty('easyToBorrow')) {
          tickers = tickers?.filter(
            ticker => ticker.easy_to_borrow === params.easyToBorrow
          );
        }
        if (params.hasOwnProperty('fractionable')) {
          tickers = tickers?.filter(
            ticker => ticker.fractionable === params.fractionable
          );
        }
        if (params.hasOwnProperty('status')) {
          tickers = tickers?.filter(ticker => ticker.status === params.status);
        }
        if (params.hasOwnProperty('tradable')) {
          tickers = tickers?.filter(
            ticker => ticker.tradable === params.tradable
          );
        }
      }
      return tickers;
    })
    .then(tickers => {
      if (tickers) {
        if (params && params.hasOwnProperty('sortBy')) {
          return tickers
            .sort()
            .sort((a, b) =>
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              a[params.sortBy] > b[params.sortBy] ? 1 : -1
            )
            .map(ticker => ticker.ticker);
        }
        return tickers.map(ticker => ticker.ticker).sort();
      }
      return undefined;
    })
    .catch(err => {
      console.log(err);
      return undefined;
    });
}
