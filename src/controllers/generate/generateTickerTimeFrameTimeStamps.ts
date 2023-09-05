import readTickerTimeFrameTable from '../read/readTickerTimeFrameTable';

export default async function generateTickerTimeFrameTimeStamps(
  name: string
): Promise<string[] | [] | null> {
  const data = await readTickerTimeFrameTable(name);
  if (!data) {
    return [];
  } else {
    try {
      return data?.map(row => row?.timestamp).sort();
    } catch {
      console.error(
        'generateTickerTimeFrameTimeStamps: No valid data receved:',
        name
      );
      return null;
    }
  }
}
