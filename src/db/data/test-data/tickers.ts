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
export type tickersDataInterface = Array<tickerDataInterface>;

export interface testDataInterface {
  tickersData: tickersDataInterface;
}

export const tickersData = [
  {
    id: '111111',
    class: null,
    exchange: 'AAAAA',
    symbol: 'AAAAA',
    name: null,
    status: null,
    tradable: false,
    marginable: false,
    maintenance_margin_requirement: null,
    shortable: false,
    easy_to_borrow: false,
    fractionable: false,
    attributes: null,
  },
  {
    id: '2',
    class: 'B',
    exchange: 'BBB',
    symbol: 'BBBB',
    name: 'b name',
    status: 'active',
    tradable: null,
    marginable: null,
    maintenance_margin_requirement: 20,
    shortable: null,
    easy_to_borrow: null,
    fractionable: null,
    attributes: [],
  },
  {
    id: null,
    class: 'us_equity',
    exchange: 'OTC',
    symbol: 'LYLTQ',
    name: 'LOYALTY VENTURES INC COM (Delaware)',
    status: 'active',
    tradable: true,
    marginable: true,
    maintenance_margin_requirement: 100,
    shortable: true,
    easy_to_borrow: false,
    fractionable: false,
    attributes: [],
    min_order_size: 0.5,
    min_trade_increment: 0.1,
    price_increment: 0.05,
  },
  {
    id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    class: 'us_equityxxxxx',
    exchange: 'OTCxxxxxxxxxx',
    symbol: 'CAJPYxxxxxxxxxxx',
    name: 'Canon Inc. American Depositary Receipts - Sponsoredxxxxxxxxxxxxxxx',
    status: 'activexxxxxxxxxxxxx',
    tradable: false,
    marginable: false,
    maintenance_margin_requirement: 100,
    shortable: true,
    easy_to_borrow: true,
    fractionable: true,
    attributes: [],
  },
];
