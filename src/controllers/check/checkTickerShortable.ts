import readTickersTable from '../read/readTickersTable';

export default async function checkTickerShortable(ticker: string) {
  return await readTickersTable()
    .then(data => data?.filter(item => item.ticker === ticker))
    .then(data => {
      // eslint-disable-next-line no-prototype-builtins
      if (data && data[0] && data[0].hasOwnProperty('shortable')) {
        return data[0].shortable;
      } else {
        return undefined;
      }
    });
}
