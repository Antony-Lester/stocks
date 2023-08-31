import readTickersTable from '../read/readTickersTable';

export default async function checkTickerExchange(ticker: string) {
  return await readTickersTable()
    .then(data => data?.filter(item => item.ticker === ticker))
    .then(data => {
      // eslint-disable-next-line no-prototype-builtins
      if (data && data[0] && data[0].hasOwnProperty('exchange')) {
        return data[0].exchange;
      } else {
        return undefined;
      }
    });
}
