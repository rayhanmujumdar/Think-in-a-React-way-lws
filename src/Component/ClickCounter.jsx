import withCounter from "../HOC/withCounter";

// eslint-disable-next-line react-refresh/only-export-components
function ClickCounter({ count, handleCounter }) {
  return (
    <div>
      <button type="button" onClick={handleCounter}>
        Click {count} times
      </button>
    </div>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default withCounter(ClickCounter);
