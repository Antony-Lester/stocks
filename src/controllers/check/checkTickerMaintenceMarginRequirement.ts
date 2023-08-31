import readTickersTable from '../read/readTickersTable';

export default async function checkTickerMaintenceMarginRequirements(
  ticker: string
) {
  return await readTickersTable()
    .then(data => data?.filter(item => item.ticker === ticker))
    .then(data => {
      if (
        data &&
        data[0] &&
        // eslint-disable-next-line no-prototype-builtins
        data[0].hasOwnProperty('maintenance_margin_requirement') &&
        data[0].maintenance_margin_requirement !== null
      ) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return parseFloat(data[0].maintenance_margin_requirement) / 100;
      } else {
        return undefined;
      }
    });
}
