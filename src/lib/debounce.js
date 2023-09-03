export default function debounce(fn, delay) {
  let timeId;
  return (e, ...args) => {
    if (timeId) {
      clearInterval(timeId);
    }
    timeId = setTimeout(() => {
      fn(e, ...args);
    }, delay);
  };
}
