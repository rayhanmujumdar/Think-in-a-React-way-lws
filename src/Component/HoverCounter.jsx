import withCounter from "../HOC/withCounter";

// eslint-disable-next-line react-refresh/only-export-components
function ClickCounter({ count, handleCounter }) {
  return (
    <div>
      <h1 onMouseOver={handleCounter}>Hover Count {count} times</h1>
    </div>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default withCounter(ClickCounter);
