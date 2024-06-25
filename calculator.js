export function addStrings(values) {
  if (values === "") return 0;
  const unformValues = values.replace(/\n/g, ",");
  const numberStrings = unformValues.split(",");
  const numbers = numberStrings.map((x) => +x);
  const summ = numbers.reduce((a, b) => a + b, 0);
  return summ;
}
