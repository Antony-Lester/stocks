export default function calculateSAR(
  high: number[],
  low: number[],
  close: number[],
  diff = 1,
  off = 0
) {
  const initalAF = 0.01;
  const stepAF = 0.01;
  const endAF = 0.01;

  const trend = [0];
  const sar = [0];
  const realSAR = [0];
  const ep = [0];
  const af = [0];

  if (
    high.some(num => isNaN(num)) ||
    low.some(num => isNaN(num)) ||
    close.some(num => isNaN(num))
  ) {
    return NaN;
  }

  trend.push(close[1] > close[0] ? 1 : -1);
  sar.push(trend[1] > 0 ? high[0] : low[0]);
  realSAR.push(sar[1]);
  ep.push(trend[1] > 0 ? high[1] : low[1]);
  af.push(initalAF);

  for (let i = 2; i < close.length; i++) {
    let temp = (sar[i - 1] + af[i - 1]) * (ep[i - 1] - sar[i - 1]);
    if (trend[i - 1] < 0) {
      sar[i] = Math.max(temp, high[i - 1], high[i - 2]);
      if (sar[i] < high[i]) {
        temp = 1;
      } else {
        temp = trend[i - 1] - 1;
      }
    } else {
      sar[i] = Math.min(temp, low[i - 1], low[i - 2]);
      if (sar[i] > low[i]) {
        temp = -1;
      } else {
        temp = trend[i - 1] + 1;
      }
    }
    trend[i] = temp;

    if (trend[i] < 0) {
      if (trend[i] !== -1) {
        temp = Math.min(low[i], ep[i - 1]);
      } else {
        temp = low[i];
      }
    } else {
      if (trend[i] !== 1) {
        temp = Math.max(high[i], ep[i - 1]);
      } else {
        temp = high[i];
      }
    }
    ep[i] = temp;

    if (Math.abs(trend[i]) === 1) {
      temp = ep[i - 1];
      af[i] = initalAF;
    } else {
      temp = sar[i];
      if (ep[i] === ep[i - 1]) {
        af[i] = af[i - 1];
      } else {
        af[i] = Math.min(endAF, af[i - 1] + stepAF);
      }
    }
    realSAR[i] = temp;
  }
  const sum = trend.reduce((a, c) => a + c, 0);
  const avgTrend = sum / trend.length;
  const result = avgTrend * diff + off;
  return isFinite(result) ? result : NaN;
}
