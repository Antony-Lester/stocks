import plusDI from './di+';
import minusDI from './di-';

export default function calculateADX(
  high: number[],
  low: number[],
  close: number[],
  diff = 1,
  off = 0
) {
  const plusDIholder = plusDI(high, low, close);
  const minusDIholder = minusDI(high, low, close);
  const ADX =
    Math.abs(plusDIholder - minusDIholder) / (plusDIholder + minusDIholder);
  const result = ADX * diff + off;
  return isFinite(result) ? result : NaN;
}
