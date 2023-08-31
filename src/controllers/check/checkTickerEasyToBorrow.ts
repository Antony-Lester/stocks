import readTickersTable from '../read/readTickersTable';

export default async function checkTickerEasyToBorrow(ticker: string) {
  return await readTickersTable()
    .then(data => data?.filter(item => item.ticker === ticker))
    .then(data => {
      // eslint-disable-next-line no-prototype-builtins
      if (data && data[0] && data[0].hasOwnProperty('easy_to_borrow')) {
        return data[0].easy_to_borrow;
      } else {
        return undefined;
      }
    });
}
