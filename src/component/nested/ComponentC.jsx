import { useContext } from "react";
import { CounterContext } from "../../App-alt";

export default function ComponentC() {
  const { dispatch, type } = useContext(CounterContext);
  return (
    <div>
      <button type="button" onClick={() => dispatch({ type: type.increment })}>
        Increment
      </button>
      <button type="button" onClick={() => dispatch({ type: type.decrement })}>
        decrement
      </button>
    </div>
  );
}
