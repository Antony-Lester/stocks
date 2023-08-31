import readTickersTable from '../read/readTickersTable';

export default async function checkTickerStatus(ticker: string) {
  return await readTickersTable()
    .then(data => data?.filter(item => item.ticker === ticker))
    .then(data => {
      // eslint-disable-next-line no-prototype-builtins
      if (data && data[0] && data[0].hasOwnProperty('status')) {
        return data[0].status;
      } else {
        return undefined;
      }
    });
}
