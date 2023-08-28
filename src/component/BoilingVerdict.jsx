function BoilingVerdict({ temperature }) {
  if (temperature >= 100) {
    return "The water would boil";
  }
  return "The water would not boil";
}
export default BoilingVerdict;
