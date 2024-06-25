export function addStrings(values) {
  if (values === "") return 0;
  if (values.endsWith(",") || values.endsWith("\n")) {
    throw new Error("Invalid input");
  }
  const unformValues = values.replace(/\n/g, ",");
  const numberStrings = unformValues.split(",");
  const numbers = numberStrings.map((x) => +x);
  const summ = numbers.reduce((a, b) => a + b, 0);
  return summ;
}
