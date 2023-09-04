export default function calculateRSI(close: number[], diff = 1, off = 0) {
  let avgUpwardChange = 0;
  for (let i = 1; i < close.length; i++) {
    avgUpwardChange += Math.max(0, close[i] - close[i - 1]);
  }
  avgUpwardChange /= close.length;
  let avgDownwardChange = 0;
  for (let i = 1; i < close.length; i++) {
    avgDownwardChange += Math.max(0, close[i - 1] - close[i]);
  }
  avgDownwardChange /= close.length;
  const rsi = (100 - 100 / (1 + avgUpwardChange / avgDownwardChange)) / 100;
  const result = rsi * diff + off;
  return isFinite(result) ? result : NaN;
}
