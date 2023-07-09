import tickersData from './tickers';

export default {tickersData};

export interface DataInterface {
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
  min_order_size?: number;
  min_trade_increment?: number;
  price_increment?: number;
}
