const scaleName = {
  f: "fahrenheit",
  c: "celsius",
};
export default function TemperatureInput({
  temperature,
  handleTemperature,
  scale,
}) {
  return (
    <fieldset>
      <legend>Enter temperature in {scaleName[scale]}</legend>
      <input
        type="text"
        onChange={(e) => handleTemperature(e, scale)}
        value={temperature}
      />
    </fieldset>
  );
}
