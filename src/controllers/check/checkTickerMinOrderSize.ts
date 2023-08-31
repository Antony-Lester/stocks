import readTickersTable from '../read/readTickersTable';

export default async function checkTickerMinOrderSize(ticker: string) {
  return await readTickersTable()
    .then(data => data?.filter(item => item.ticker === ticker))
    .then(data => {
      if (
        data &&
        data[0] &&
        // eslint-disable-next-line no-prototype-builtins
        data[0].hasOwnProperty('min_order_size') &&
        data[0].min_order_size !== null
      ) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return parseFloat(data[0].min_order_size);
      } else {
        return undefined;
      }
    });
}
