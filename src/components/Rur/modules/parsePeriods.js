import moment from 'moment';

export default function parsePeriods(inputString) {
  const dateRegex = /(\d{2}[./]\d{2}[./]\d{4})/g;
  const datesArray = [];
  let match;
  while ((match = dateRegex.exec(inputString)) !== null) {
    const momentDate = moment(match[1], ['DD/MM/YYYY', 'DD.MM.YYYY'], true);
    if (momentDate.isValid()) {
      datesArray.push(momentDate);
    }
  }
  return datesArray;
}
