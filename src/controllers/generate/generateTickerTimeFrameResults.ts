import {
  dataPointBaseType,
  dataPointResultType,
} from '../../db/data/development-data';
import percentageChange from '../../metrics/percentageChange';

export default async function generateTickerTimeFrameResults(
  name: string,
  data: Array<dataPointBaseType>
): Promise<dataPointResultType | null> {
  const [data0Bar, data1Bar, data2Bar, data3Bar, data4Bar, data5Bar] = data;

  for (let i = 0; i < data.length; i++) {
    for (const [key, value] of Object.entries(data[i])) {
      if (typeof value === 'number' || value === null) {
        if (!isFinite(value) || value < 0 || value > 1 || isNaN(value)) {
          console.warn(`generateTickerTimeFrameResult 
                    Input Out Of Range:
                    ${name}: ${data[i].timestamp} 
                    ${key}: ${value}`);
          return null;
        }
      }
    }
  }

  const result = {
    name,
    timestamp: data0Bar.timestamp,
    result_long_1: percentageChange(data0Bar.high, data1Bar.low),
    result_long_2: percentageChange(data0Bar.high, data2Bar.low),
    result_long_3: percentageChange(data0Bar.high, data3Bar.low),
    result_long_4: percentageChange(data0Bar.high, data4Bar.low),
    result_long_5: percentageChange(data0Bar.high, data5Bar.low),
    result_real_1: percentageChange(data0Bar.close, data1Bar.close),
    result_real_2: percentageChange(data0Bar.close, data2Bar.close),
    result_real_3: percentageChange(data0Bar.close, data3Bar.close),
    result_real_4: percentageChange(data0Bar.close, data4Bar.close),
    result_real_5: percentageChange(data0Bar.close, data5Bar.close),
    result_short_1: percentageChange(data0Bar.low, data1Bar.high),
    result_short_2: percentageChange(data0Bar.low, data2Bar.high),
    result_short_3: percentageChange(data0Bar.low, data3Bar.high),
    result_short_4: percentageChange(data0Bar.low, data4Bar.high),
    result_short_5: percentageChange(data0Bar.low, data5Bar.high),
  };
  return result;
}
