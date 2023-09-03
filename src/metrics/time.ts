export default function calculateTime(dateStamp: string): number {
  const date = new Date(dateStamp);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return Math.round((hours * 60 + minutes) * 0.000694444 * 1000) / 1000;
}
