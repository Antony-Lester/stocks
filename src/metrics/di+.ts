export default function calculateDIplus(
  high: number[],
  low: number[],
  close: number[],
  diff = 1,
  off = 0
): number {
  const period = close.length;
  let sumPositiveDM = 0;
  let sumTrueRange = 0;
  for (let i = 1; i < period; i++) {
    let positiveDM = high[i] - high[i - 1];
    if (positiveDM < 0) {
      positiveDM = 0;
    }
    sumPositiveDM += positiveDM;

    const trueRange = Math.max(
      high[i] - low[i],
      Math.abs(high[i] - close[i - 1]),
      Math.abs(low[i] - close[i - 1])
    );
    sumTrueRange += trueRange;
  }
  const result = (sumPositiveDM / sumTrueRange) * diff + off;
  return isFinite(result) ? result : NaN;
}
