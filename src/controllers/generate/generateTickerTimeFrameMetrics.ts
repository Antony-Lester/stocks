import {
  dataPointBaseType,
  dataPointMetricType,
} from '../../db/data/development-data';
import calculateADX from '../../metrics/adx';
import calculateCP, {CP} from '../../metrics/cp';
import calculateDIplus from '../../metrics/di+';
import calculateDIminus from '../../metrics/di-';
import calculateEOM from '../../metrics/eom';
import calculateFPP, {FPP} from '../../metrics/fpp';
import calculateMFI from '../../metrics/mfi';
import calculateRSI from '../../metrics/rsi';
import calculateSAR from '../../metrics/sar';
import calculateSC from '../../metrics/sc';
import calculateTD, {TD} from '../../metrics/td';
import calculateTime from '../../metrics/time';

export default async function generateTickerTimeFrameMetrics(
  name: string,
  data: Array<dataPointBaseType>
): Promise<dataPointMetricType | null> {
  const open28: Array<number> = [];
  const high28: Array<number> = [];
  const low28: Array<number> = [];
  const close28: Array<number> = [];
  const volume28: Array<number> = [];
  for (let i = 0; i < data.length; i++) {
    if (
      data[i].open === null ||
      data[i].high === null ||
      data[i].low === null ||
      data[i].close === null ||
      data[i].vol === null
    ) {
      console.warn(`generateTickerTimeFrameMetrics 
        Null Value Receved:
        ${name}: ${data[i]}`);
      return null;
    }
    open28.push(data[i].open);
    high28.push(data[i].high);
    low28.push(data[i].low);
    close28.push(data[i].close);
    volume28.push(data[i].vol);
  }
  const high14: Array<number> = high28.slice(Math.max(high28.length - 14, 0));
  const low14: Array<number> = low28.slice(Math.max(low28.length - 14, 0));
  const close14: Array<number> = close28.slice(
    Math.max(close28.length - 14, 0)
  );
  const volume14: Array<number> = volume28.slice(
    Math.max(volume28.length - 14, 0)
  );
  const high: number = high28.slice(-1)[0];
  const low: number = low28.slice(-1)[0];
  const close: number = close28.slice(-1)[0];
  const open: number = open28.slice(-1)[0];
  const timestamp = data[27].timestamp;
  const metric_cp: CP = calculateCP(high, low, close);
  const metric_fpp: FPP = calculateFPP(high, low, close);
  const metric_td: TD = calculateTD(high, low, close, open);
  const metrics = {
    name,
    timestamp,
    metric_adx_a: calculateADX(high14, low14, close14, 14),
    metric_adx_b: calculateADX(high28, low28, close28, 28),
    metric_di_minus_a: calculateDIminus(high14, low14, close14, 14),
    metric_di_minus_b: calculateDIminus(high28, low28, close28, 28),
    metric_di_plus_a: calculateDIplus(high14, low14, close14, 14),
    metric_di_plus_b: calculateDIplus(high28, low28, close28, 28),
    metric_eom_a: calculateEOM(high14, low14, volume14),
    metric_eom_b: calculateEOM(high28, low28, volume28),
    metric_mfi_a: calculateMFI(high14, low14, close14, volume14, 14),
    metric_mfi_b: calculateMFI(high28, low28, close28, volume28, 28),
    metric_rsi_a: calculateRSI(close14),
    metric_rsi_b: calculateRSI(close28),
    metric_sar_a: calculateSAR(high14, low14, close14),
    metric_sar_b: calculateSAR(high28, low28, close28),
    metric_sc_a: calculateSC(close14),
    metric_sc_b: calculateSC(close28),
    metric_time: calculateTime(timestamp),
    metric_cp_s3: metric_cp.S3,
    metric_cp_s2: metric_cp.S2,
    metric_cp_s1: metric_cp.S1,
    metric_cp_r1: metric_cp.R1,
    metric_cp_r2: metric_cp.R2,
    metric_cp_r3: metric_cp.R3,
    metric_fpp_s3: metric_fpp.S3,
    metric_fpp_s2: metric_fpp.S2,
    metric_fpp_s1: metric_fpp.S1,
    metric_fpp_r1: metric_fpp.R1,
    metric_fpp_r2: metric_fpp.R2,
    metric_fpp_r3: metric_fpp.R3,
    metric_td_r: metric_td.R,
    metric_td_s: metric_td.S,
  };
  for (const [key, value] of Object.entries(metrics)) {
    if (typeof value === 'number') {
      if (!isFinite(value) || value < 0 || value > 1 || isNaN(value)) {
        console.warn(`generateTickerTimeFrameMetrics 
                Metric Out Of Range:
                ${name}: ${timestamp} 
                ${key}: ${value}`);
        return null;
      }
    }
  }
  return metrics;
}

//TODO adapt tables add columns for extra metrics...
