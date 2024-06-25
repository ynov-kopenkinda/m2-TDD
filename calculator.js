export function addStrings(values) {
  if (values === "") return 0;
  let cleanValue = values.trimStart();
  let extraDelimiter;
  const hasExtraDelimeter = /\/\/(.*)\n/.test(cleanValue);
  if (hasExtraDelimeter) {
    cleanValue = cleanValue.slice(2);
    const nextIndex = cleanValue.indexOf("\n");
    extraDelimiter = cleanValue.slice(0, nextIndex);
    values = cleanValue.slice(nextIndex + 1);
  }
  if (
    values.endsWith(",") ||
    values.endsWith("\n") ||
    (extraDelimiter && values.endsWith(extraDelimiter))
  ) {
    throw new Error("Invalid input");
  }
  let unformValues = values.replace(/\n/g, ",");
  if (extraDelimiter) {
    unformValues = unformValues.replace(new RegExp(extraDelimiter, "g"), ",");
  }
  const numberStrings = unformValues.split(",");
  const numbers = numberStrings.map((x) => +x);
  const summ = numbers.reduce((a, b) => a + b, 0);
  return summ;
}
