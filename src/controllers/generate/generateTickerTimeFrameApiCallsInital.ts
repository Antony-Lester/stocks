import moment from 'moment';
import {USER_SUBSCRIBED} from '../../api/secrets';

const years = [2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015];

const getStartDateByWeekAndYear = function (
  week: number,
  year: number,
  month: number
) {
  return moment({y: year, M: month, d: 1})
    .add(week - 1, 'w')
    .day('Sunday')
    .toDate();
};

const getEndDateByWeekAndYear = function (
  week: number,
  year: number,
  month: number
) {
  return moment({y: year, M: month, d: 1})
    .add(week - 1, 'w')
    .day('Saturday')
    .toDate();
};

function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 0);
}

function getLastDayOfMonth(year: number, month: number) {
  return new Date(year, month, 0);
}

export default async function generateTickerTimeFrameApiCallsInital(
  name: string
): Promise<[string, string, string][] | null> {
  const [, , timeFrame] = name.split('_');
  const apiCalls: [string, string, string][] = [];
  for (const year of years) {
    if (timeFrame === '1Min') {
      for (let i = 1; i < 53; i++) {
        const start = getStartDateByWeekAndYear(i, year, 0).toISOString();
        const end = getEndDateByWeekAndYear(i, year, 0).toISOString();
        apiCalls.push([name, start, end]);
      }
    } else if (timeFrame === '5Min') {
      for (let i = 1; i < 53; i += 2) {
        const start = getStartDateByWeekAndYear(i, year, 0).toISOString();
        const end = getEndDateByWeekAndYear(i + 1, year, 0).toISOString();
        apiCalls.push([name, start, end]);
      }
    } else if (timeFrame === '30Min') {
      const m1start = getFirstDayOfMonth(year, 0).toISOString();
      const m1end = getLastDayOfMonth(year, 6).toISOString();
      const m2start = getFirstDayOfMonth(year, 6).toISOString();
      const m2end = getLastDayOfMonth(year, 12).toISOString();
      apiCalls.push([name, m1start, m1end]);
      apiCalls.push([name, m2start, m2end]);
    } else if (timeFrame === '2Hour' || timeFrame === '1Day') {
      const start = new Date(year, 0, 1).toISOString();
      const end = new Date(year, 11, 31);
      !USER_SUBSCRIBED && year === new Date().getFullYear()
        ? end.setMinutes(end.getMinutes() - 30)
        : null;
      apiCalls.push([name, start, end.toISOString()]);
    }
  }
  return apiCalls.sort();
}
