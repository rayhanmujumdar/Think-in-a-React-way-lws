export function toFahrenheit(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

export function toCelsius(celsius) {
  return (celsius * 9) / 5 + 32;
}

export function convertor(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = convert(parseFloat(temperature));
  const rounded = Math.round(output * 1000) / 1000;
  console.log({ rounded });
  return rounded;
}
