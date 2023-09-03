export interface FPP {
  S3: number;
  S2: number;
  S1: number;
  R1: number;
  R2: number;
  R3: number;
}

export default function calculateFPP(
  high: number,
  low: number,
  close: number,
  diff = 1,
  off = 0
): FPP {
  const getPercentageChange = (x: number, y: number) => {
    const result = ((x - y) / x) * diff + off;
    return isFinite(result) ? result : NaN;
  };
  const pivot = (high + low + close) / 3;
  const R3 = getPercentageChange(2 * (high - low) + pivot, close);
  const R2 = getPercentageChange(high - low + pivot, close);
  const R1 = getPercentageChange(pivot * 2 - low, close);
  const S1 = getPercentageChange(close, pivot * 2 - high);
  const S2 = getPercentageChange(close, pivot - (high - low));
  const S3 = getPercentageChange(close, pivot - 2 * (high - low));
  return {S3, S2, S1, R1, R2, R3};
}
