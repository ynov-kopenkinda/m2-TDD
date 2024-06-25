export function addStrings(values) {
  if (values === "") return 0;
  const allowedDelimiters = [",", "\n"];
  let cleanValue = values;
  const hasExtraDelimeter = /\/\/(.*)\n/.test(cleanValue);
  if (hasExtraDelimeter) {
    cleanValue = cleanValue.slice(2);
    const nextIndex = cleanValue.indexOf("\n");
    const extraDelimiter = cleanValue.slice(0, nextIndex);
    allowedDelimiters.length = 0;
    allowedDelimiters.push(extraDelimiter);
    cleanValue = cleanValue.slice(nextIndex + 1);
  }
  if (
    allowedDelimiters.length == 0 ||
    allowedDelimiters.some((delimiter) => cleanValue.endsWith(delimiter))
  ) {
    throw new Error("Invalid input");
  }
  const numberStrings = allowedDelimiters.reduce(
    (acc, delimiter) => acc.flatMap((x) => x.split(delimiter)),
    [cleanValue]
  );
  const numbers = numberStrings.map((x) => +x);
  if (numbers.some((x) => Number.isNaN(x)) || numbers.some((x) => x < 0)) {
    throw new Error("Invalid input");
  }
  const summ = numbers.reduce((a, b) => a + b, 0);
  return summ;
}
