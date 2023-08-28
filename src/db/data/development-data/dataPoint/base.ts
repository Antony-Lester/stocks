export const dataPointBase = {
  timestamp: '2020-01-01T01:01:01.001Z',
  open: 1.0,
  high: 2.5,
  low: 1.0,
  close: 2.0,
  vol: 1000.0,
};

export interface dataPointBaseType {
  timestamp: string;
  open: number;
  high: number;
  low: number;
  close: number;
  vol: number;
}
