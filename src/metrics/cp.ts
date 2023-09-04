export interface CP {
  S3: number;
  S2: number;
  S1: number;
  R1: number;
  R2: number;
  R3: number;
}

export default function calculateCP(
  high: number,
  low: number,
  close: number,
  diff = 1,
  off = 0
): CP {
  const getPercentageChange = (x: number, y: number) => {
    const result = ((x - y) / x) * diff + off;
    return isFinite(result) ? result : NaN;
  };
  const difference = high - low;
  const R3 = getPercentageChange((difference * 1.1) / 4 + close, close);
  const R2 = getPercentageChange((difference * 1.1) / 6 + close, close);
  const R1 = getPercentageChange((difference * 1.1) / 12 + close, close);
  const S1 = Math.abs(
    getPercentageChange(close - (difference * 1.1) / 12, close)
  );
  const S2 = Math.abs(
    getPercentageChange(close - (difference * 1.1) / 6, close)
  );
  const S3 = Math.abs(
    getPercentageChange(close - (difference * 1.1) / 4, close)
  );
  return {S3, S2, S1, R1, R2, R3};
}
