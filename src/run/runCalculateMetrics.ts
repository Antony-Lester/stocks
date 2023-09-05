/*import rateLimitTickerTimeFrame from '../api/rateLimit/rateLimitTickerTimeFrame';
import generateTickerTimeFrameApiCallsInitalMissing from '../controllers/generate/generateTickerTimeFrameApiCallsInitalMissing';
import {generateTickerTimeFrameTableNames} from '../controllers/generate/generateTickerTimeFrameTableNames';
import generateTickerTimeFrameTimeStamps from '../controllers/generate/generateTickerTimeFrameTimeStamps';

export default async function runCalculateMetrics() {
  const tickerTimeFrameNames = await generateTickerTimeFrameTableNames();
  if (!tickerTimeFrameNames) {
    console.error('No timeFrameTableNames @runCalculateMetrics');
    return;
  }
  for (let index = 0; index < tickerTimeFrameNames.length; index++) {
    const tickerTimeFrameName = tickerTimeFrameNames[index];

    let missing = await generateTickerTimeFrameApiCallsInitalMissing(
      tickerTimeFrameName
    );
    if (missing) {
      console.log(
        `missing ticker time frame data for ${tickerTimeFrameName} downloading`
      );
      await rateLimitTickerTimeFrame(missing);
      missing = await generateTickerTimeFrameApiCallsInitalMissing(
        tickerTimeFrameName
      );
    }
    if (!missing) {
      let metricsMinMax = {
        metric_adx_a: {min: Infinity, max: -Infinity},
        metric_adx_b: {min: Infinity, max: -Infinity},
        metric_di_minus_a: {min: Infinity, max: -Infinity},
        metric_di_minus_b: {min: Infinity, max: -Infinity},
        metric_di_plus_a: {min: Infinity, max: -Infinity},
        metric_di_plus_b: {min: Infinity, max: -Infinity},
        metric_eom_a: {min: Infinity, max: -Infinity},
        metric_eom_b: {min: Infinity, max: -Infinity},
        metric_mfi_a: {min: Infinity, max: -Infinity},
        metric_mfi_b: {min: Infinity, max: -Infinity},
        metric_rsi_a: {min: Infinity, max: -Infinity},
        metric_rsi_b: {min: Infinity, max: -Infinity},
        metric_sar_a: {min: Infinity, max: -Infinity},
        metric_sar_b: {min: Infinity, max: -Infinity},
        metric_sc_a: {min: Infinity, max: -Infinity},
        metric_sc_b: {min: Infinity, max: -Infinity},
        metric_time: {min: Infinity, max: -Infinity},
        metric_cp_s3: {min: Infinity, max: -Infinity},
        metric_cp_s2: {min: Infinity, max: -Infinity},
        metric_cp_s1: {min: Infinity, max: -Infinity},
        metric_cp_r1: {min: Infinity, max: -Infinity},
        metric_cp_r2: {min: Infinity, max: -Infinity},
        metric_cp_r3: {min: Infinity, max: -Infinity},
        metric_fpp_s3: {min: Infinity, max: -Infinity},
        metric_fpp_s2: {min: Infinity, max: -Infinity},
        metric_fpp_s1: {min: Infinity, max: -Infinity},
        metric_fpp_r1: {min: Infinity, max: -Infinity},
        metric_fpp_r2: {min: Infinity, max: -Infinity},
        metric_fpp_r3: {min: Infinity, max: -Infinity},
        metric_td_r: {min: Infinity, max: -Infinity},
        metric_td_s: {min: Infinity, max: -Infinity},
      };
      const timestamps = await generateTickerTimeFrameTimeStamps(
        tickerTimeFrameName
      );

      //----------------------------------------------------------------
      const dataSetsTimeStamps =
          await generateTickerTimeFrameDataSetsTimeStamps(timestamps);
        //------------------------------------------------------------------
      for (let index = 0; index < dataSetsTimeStamps.length; index++) {
        const dataSetTimeStamp = dataSetsTimeStamps[index];
        const dataPoints = await generateTickerTimeFrameDataPoints(
          tickerTimeFrameName,
          dataSetTimeStamp
        );
        const dataPointsArrays = await generateTickerTimeFrameDataPointsArrays(
          dataPoints
        );
        const otherDataPoints = await generateTickerTimeFrameOtherArrays(
          dataPointsArrays
        );
        const metrics = await generateTickerTimeFrameMetrics(
          dataPointsArrays,
          otherDataPoints
        );
        metricsMinMax = await generateTickerTimeFrameMetricsMinMax(
          metricsMinMax,
          metrics
        );
      }
      const offsetAndDifference =
        await generateTickerTimeFrameOffsetAndDifference(metricsMinMax);
      for (let index = 0; index < dataSetsTimeStamps.length; index++) {
        const dataSetTimeStamp = dataSetsTimeStamps[index];
        const dataPoints = await generateTickerTimeFrameDataPoints(
          tickerTimeFrameName,
          dataSetTimeStamp
        );
        const dataPointsArrays = await generateTickerTimeFrameDataPointsArrays(
          dataPoints
        );
        const otherDataPoints = await generateTickerTimeFrameOtherArrays(
          dataPointsArrays
        );
        const metrics = await generateTickerTimeFrameMetrics(
          dataPointsArrays,
          otherDataPoints,
          offsetAndDifference
        );
        populateTickerTimeFrameMetrics(tickerTimeFrameName, metrics);
      }

      console.log(
        `ticker time frame ${tickerTimeFrameName} metrics calculated`
      );
    }
  }
}

*/
