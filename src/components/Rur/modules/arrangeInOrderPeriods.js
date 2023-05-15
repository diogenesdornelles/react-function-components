import moment from 'moment';

export default function arrangeInOrderPeriods(periods, limits) {
  const newPeriods = [];
  let start;
  let end;
  if (periods.length > 0) {
    periods.forEach((date, index) => {
      if (index % 2 === 0) {
        start = date;
        end = periods[index + 1] || null;
        if (start - limits.last <= 0 && end - limits.last > 0) {
          start = date;
          end = limits.last;
          newPeriods.push({
            start,
            end,
            indemnify: false,
            range: `${moment.duration(end.diff(start)).years()} anos, ${moment
              .duration(end.diff(start))
              .months()} mes(es) e ${moment
              .duration(end.diff(start))
              .days()} dia(s)`,
          });
          start = limits.after;
          end = periods[index + 1] || null;
          newPeriods.push({
            start,
            end,
            indemnify: true,
            range: `${moment.duration(end.diff(start)).years()} anos, ${moment
              .duration(end.diff(start))
              .months()} mes(es) e ${moment
              .duration(end.diff(start))
              .days()} dia(s)`,
          });
        } else if (start - limits.last <= 0 && end - limits.last < 0) {
          newPeriods.push({
            start,
            end,
            indemnify: false,
            range: `${moment.duration(end.diff(start)).years()} anos, ${moment
              .duration(end.diff(start))
              .months()} mes(es) e ${moment
              .duration(end.diff(start))
              .days()} dia(s)`,
          });
        } else if (start - limits.last > 0 && end - limits.last > 0) {
          newPeriods.push({
            start,
            end,
            indemnify: true,
            range: `${moment.duration(end.diff(start)).years()} anos, ${moment
              .duration(end.diff(start))
              .months()} mes(es) e ${moment
              .duration(end.diff(start))
              .days()} dia(s)`,
          });
        }
      }
    });
  }
  return newPeriods;
}
