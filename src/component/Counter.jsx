import { useReducer } from "react";

const initialValue = 5;
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};
export default function Counter() {
  const [count, dispatch] = useReducer(reducer, initialValue);
  return (
    <div>
      <p>{count}</p>
      <button type="button" onClick={() => dispatch({ type: "increment" })}>
        Increment
      </button>
      <button type="button" onClick={() => dispatch({ type: "decrement" })}>
        decrement
      </button>
    </div>
  );
}
