export default function getPeriodsUnfeasiblesByAge(periods, birthLimits) {
  const unfeasible = periods.map((date) => {
    if (
      date.start - birthLimits.complete < 0 &&
      date.end - birthLimits.complete > 0
    ) {
      return `${date.start
        .locale('pt-BR')
        .format('DD/MM/YYYY')} a ${birthLimits.uncomplete
        .locale('pt-BR')
        .format('DD/MM/YYYY')}`;
    } else if (date.end - birthLimits.complete < 0) {
      return `${date.start.locale('pt-BR').format('DD/MM/YYYY')} a ${date.end
        .locale('pt-BR')
        .format('DD/MM/YYYY')}`;
    }
  });
  return unfeasible;
}
