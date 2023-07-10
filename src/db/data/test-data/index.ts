import tickersData from './tickers';

export default {tickersData};

export interface testDataInterface {
  tickersData: tickersDataInterface;
}

export type tickersDataInterface = Array<tickerDataInterface>;
export interface tickerDataInterface {
  id: string | null;
  class: string | null;
  exchange: string;
  symbol: string;
  name: string | null;
  status: string | null;
  tradable: boolean | null;
  marginable: boolean | null;
  maintenance_margin_requirement: number | null;
  shortable: boolean | null;
  easy_to_borrow: boolean | null;
  fractionable: boolean | null;
  attributes: Array<string> | null;
  min_order_size?: number | null;
  min_trade_increment?: number | null;
  price_increment?: number | null;
}
