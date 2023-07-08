export default function (
  high: number[],
  low: number[],
  close: number[],
  volume: number[],
  diff = 1,
  off = 0
) {
  if (
    high.some(num => isNaN(num)) ||
    low.some(num => isNaN(num)) ||
    close.some(num => isNaN(num)) ||
    volume.some(num => isNaN(num))
  ) {
    return NaN;
  }

  const period = high.length;
  const typicalPrice = [...close].map(
    (close, index) => (high[index] + low[index] + close) / 3
  );
  const moneyFlow = [...typicalPrice].map(
    (typical, index) => typical * volume[index]
  );
  const positiveFlow: Array<number> = [];
  const negativeFlow: Array<number> = [];
  for (let i = 1; i < typicalPrice.length; i++) {
    if (typicalPrice[i] > typicalPrice[i - 1]) {
      positiveFlow.push(moneyFlow[i - 1]);
      negativeFlow.push(0);
    } else if (typicalPrice[i] < typicalPrice[i - 1]) {
      positiveFlow.push(0);
      negativeFlow.push(moneyFlow[i - 1]);
    } else {
      positiveFlow.push(0);
      negativeFlow.push(0);
    }
  }
  const positiveMoneyFlowArray: number[] = [];
  const negativeMoneyFlowArray = [];
  for (let i = 0; i < positiveFlow.length; i++) {
    positiveMoneyFlowArray.push(...positiveFlow.slice(i + 1 - period, i + 1));
    negativeMoneyFlowArray.push(...negativeFlow.slice(i + 1 - period, i + 1));
  }
  const positiveMoneyFlow =
    positiveMoneyFlowArray.reduce((x: number, y: number) => x + y, 0) / period;
  const negativeMoneyFlow =
    negativeMoneyFlowArray.reduce((x, y) => x + y, 0) / period;
  const result = (positiveMoneyFlow / (negativeMoneyFlow + 1)) * diff + off;
  return isFinite(result) ? result : NaN;
}
