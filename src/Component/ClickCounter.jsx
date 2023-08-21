// eslint-disable-next-line react/prop-types
export default function ClickCounter({ count, incrementHandler }) {
  return (
    <button onClick={incrementHandler} type="button">
      Click {count} times
    </button>
  );
}
