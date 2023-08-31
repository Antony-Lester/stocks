import readTickersTable from '../read/readTickersTable';

export default async function checkTickerClass(ticker: string) {
  return await readTickersTable()
    .then(data => data?.filter(item => item.ticker === ticker))
    .then(data => {
      // eslint-disable-next-line no-prototype-builtins
      if (data && data[0] && data[0].hasOwnProperty('class')) {
        return data[0].class;
      } else {
        return undefined;
      }
    });
}
