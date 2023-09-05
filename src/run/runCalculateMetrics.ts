/*
import rateLimitTickerTimeFrame from '../api/rateLimit/rateLimitTickerTimeFrame';
import generateTickerTimeFrameApiCallsInitalMissing from '../controllers/generate/generateTickerTimeFrameApiCallsInitalMissing';
import { generateTickerTimeFrameTableNames } from '../controllers/generate/generateTickerTimeFrameTableNames';



export default async function runCalculateMetrics() {
    const tickerTimeFrameNames = await generateTickerTimeFrameTableNames()
    if (!tickerTimeFrameNames) {
        console.error('No timeFrameTableNames @runCalculateMetrics');
        return;
    }
    for (let index = 0; index < tickerTimeFrameNames.length; index++) {
        const tickerTimeFrameName = tickerTimeFrameNames[index];

        let missing = await generateTickerTimeFrameApiCallsInitalMissing(tickerTimeFrameName);
        if (missing) {
            console.log(`missing ticker time frame data for ${tickerTimeFrameName} downloading`)
            await rateLimitTickerTimeFrame(missing)
            missing = await generateTickerTimeFrameApiCallsInitalMissing(tickerTimeFrameName);
        }
        if (!missing) {
            let metricsMinMax = {}
            const timestamps = await generateTickerTimeFrameTimeStamps(tickerTimeFrameName)

            //----------------------------------------------------------------
            const dataSetsTimeStamps = await generateTickerTimeFrameDataSetsTimeStamps(timestamps)
            for (let index = 0; index < dataSetsTimeStamps.length; index++) {
                const dataSetTimeStamp = dataSetsTimeStamps[index];
                const dataPoints = await generateTickerTimeFrameDataPoints(tickerTimeFrameName, dataSetTimeStamp)
                const dataPointsArrays = await generateTickerTimeFrameDataPointsArrays(dataPoints)
                const otherDataPoints = await generateTickerTimeFrameOtherArrays(dataPointsArrays)
                const metrics = await generateTickerTimeFrameMetrics(dataPointsArrays, otherDataPoints)
                metricsMinMax = await generateTickerTimeFrameMetricsMinMax(metricsMinMax, metrics)
            }
            const offsetAndDifference = await generateTickerTimeFrameOffsetAndDifference(metricsMinMax)
            for (let index = 0; index < dataSetsTimeStamps.length; index++) {
                const dataSetTimeStamp = dataSetsTimeStamps[index];
                const dataPoints = await generateTickerTimeFrameDataPoints(tickerTimeFrameName, dataSetTimeStamp)
                const dataPointsArrays = await generateTickerTimeFrameDataPointsArrays(dataPoints)
                const otherDataPoints = await generateTickerTimeFrameOtherArrays(dataPointsArrays)
                const metrics = await generateTickerTimeFrameMetrics(dataPointsArrays, otherDataPoints, offsetAndDifference)
                populateTickerTimeFrameMetrics(tickerTimeFrameName, metrics)
            }

            console.log(`ticker time frame ${tickerTimeFrameName} metrics calculated`)
        }
}
*/
