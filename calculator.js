export function addStrings(values) {
  if (values === "") return 0;
  const numberStrings = values.split(",");
  const numbers = numberStrings.map((x) => +x);
  const summ = numbers.reduce((a, b) => a + b, 0);
  return summ;
}
