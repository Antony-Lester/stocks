export default function calculateDIminus(
  high: number[],
  low: number[],
  close: number[],
  diff = 1,
  off = 0
): number {
  const period = close.length;
  let sumNegativeDM = 0;
  let sumTrueRange = 0;
  for (let i = 1; i < period; i++) {
    let negativeDM = low[i - 1] - low[i];
    if (negativeDM < 0) {
      negativeDM = 0;
    }
    sumNegativeDM += negativeDM;

    const trueRange = Math.max(
      high[i] - low[i],
      Math.abs(high[i] - close[i - 1]),
      Math.abs(low[i] - close[i - 1])
    );
    sumTrueRange += trueRange;
  }
  const result = (sumNegativeDM / sumTrueRange) * diff + off;
  return isFinite(result) ? result : NaN;
}
