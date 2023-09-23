import { useReducer } from "react";

const initialState = {
  count: 0,
  count2: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + action.payload };
    case "decrement":
      return { ...state, count: state.count - action.payload };
    case "increment2":
      return { ...state, count2: state.count2 + action.payload };
    case "decrement2":
      return { ...state, count2: state.count2 - action.payload };
    default:
      return state;
  }
};

export default function ComplexCounter() {
  const [counter, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      {/* counter 1 */}
      <div>
        <p>{counter.count}</p>
        <br />
        <div>
          <button
            type="button"
            onClick={() => dispatch({ type: "increment", payload: 1 })}
          >
            Increment by one
          </button>
          <button
            type="button"
            onClick={() => dispatch({ type: "decrement", payload: 1 })}
          >
            decrement by one
          </button>
        </div>
      </div>
      {/* counter 2 */}
      <div>
        <p>{counter.count2}</p>
        <br />
        <div>
          <button
            type="button"
            onClick={() => dispatch({ type: "increment2", payload: 1 })}
          >
            Increment by one
          </button>
          <button
            type="button"
            onClick={() => dispatch({ type: "decrement2", payload: 1 })}
          >
            decrement by one
          </button>
        </div>
      </div>
    </div>
  );
}
