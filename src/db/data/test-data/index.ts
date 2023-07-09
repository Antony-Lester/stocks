import tickersData from './tickers';

export default {tickersData};

export interface testDataInterface {
  tickersData: tickersDataInterface;
}

export type tickersDataInterface = Array<tickerDataInterface>;
export interface tickerDataInterface {
  id: string;
  class: string;
  exchange: string;
  symbol: string;
  name: string;
  status: string;
  tradable: boolean;
  marginable: boolean;
  maintenance_margin_requirement: number;
  shortable: boolean;
  easy_to_borrow: boolean;
  fractionable: boolean;
  attributes: Array<string>;
  min_order_size?: string;
  min_trade_increment?: string;
  price_increment?: string;
}
