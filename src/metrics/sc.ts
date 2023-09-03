export default function calculateSC(close: number[], diff = 1, off = 0) {
  let lowestLow = Number.MAX_VALUE;
  let highestHigh = Number.MIN_VALUE;

  for (let i = 0; i < close.length; i++) {
    lowestLow = Math.min(lowestLow, close[i]);
    highestHigh = Math.max(highestHigh, close[i]);
  }
  const result =
    ((close[close.length - 1] - lowestLow) / (highestHigh - lowestLow)) * diff +
    off;
  return isFinite(result) ? result : NaN;
}
