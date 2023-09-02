export default function calculateEOM(
  high: number[],
  low: number[],
  volume: number[],
  diff = 1,
  off = 0
): number {
  const average = (arr: number[]) =>
    arr.reduce((p, c) => p + c, 0) / arr.length;
  const midpoint = [...high].map((high, index) => (high + low[index]) / 2);
  const distanceMoved = [...midpoint].map((midpoint, index, array) =>
    index === 0 ? 0 : (midpoint - array[index - 1]) / 2
  );
  const boxRatio = [...volume].map(
    (volume, index) => (volume * 1.2) / midpoint[index]
  );
  const easeOfMovement = [...distanceMoved].map(
    (distance, index) => distance / boxRatio[index]
  );

  const result = average(easeOfMovement) * diff + off;
  return isFinite(result) ? result : NaN;
}
