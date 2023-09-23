import React, { useReducer } from "react";
import "./App.css";
import ComponentA from "./component/nested/ComponentA";

export const CounterContext = React.createContext(null);

const initialValue = {
  counter: 0,
  counter2: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "decrement":
      return {
        ...state,
        counter: state.counter - 1,
      };
    case "increment2":
      return {
        ...state,
        counter2: state.counter2 + 1,
      };
    case "decrement2":
      return {
        ...state,
        counter2: state.counter2 - 1,
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialValue);
  return (
    <>
      <div>
        <p>{state.counter}</p>
        <CounterContext.Provider
          value={{
            dispatch: dispatch,
            type: { increment: "increment", decrement: "decrement" },
          }}
        >
          <ComponentA />
        </CounterContext.Provider>
      </div>
      <div>
        <p>{state.counter2}</p>
        <CounterContext.Provider
          value={{
            dispatch: dispatch,
            type: { increment: "increment2", decrement: "decrement2" },
          }}
        >
          <ComponentA />
        </CounterContext.Provider>
      </div>
    </>
  );
}

export default App;
