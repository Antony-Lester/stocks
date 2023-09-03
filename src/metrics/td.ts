export interface TD {
  R: number;
  S: number;
}

export default function calculateTD(
  high: number,
  low: number,
  close: number,
  open: number,
  diff = 1,
  off = 0
): TD {
  const getPercentageChange = (x: number, y: number) => {
    const result = ((x - y) / x) * diff + off;
    return isFinite(result) ? result : NaN;
  };

  if (
    !isFinite(high) ||
    !isFinite(low) ||
    !isFinite(close) ||
    !isFinite(open)
  ) {
    return {R: NaN, S: NaN};
  }

  let x = 0;
  if (close < open) {
    x = high + (2 * low + close);
  }
  if (close > open) {
    x = 2 * high + low + close;
  }
  if (close === open) {
    x = high + low + 2 * close;
  }
  const R = getPercentageChange(x / 2 - low, close);
  const S = Math.abs(getPercentageChange(x / 2 - high, close));
  return {R, S};
}
