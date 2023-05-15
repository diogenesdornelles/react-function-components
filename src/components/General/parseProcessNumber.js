export default function parseProcessNumber(inputString) {
  const processNumberRegex =
    /^(\d{7}-\d{2}[./]\d{4}[./]\d{1}[./]\d{2}[./]\d{4})$/g;
  const match = processNumberRegex.exec(inputString);
  return match;
}
