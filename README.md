# React useState Hook

**Date: 03/9/23**

**useState Hooks** **Document:**

**Reference:** 

1. Call `useState` at the top level of your component to declare a [state variable.](https://react.dev/learn/state-a-components-memory)

**Usage:** 

```jsx
import { useState } from 'react';

function MyComponent() {
  const [age, setAge] = useState(42);
  const [name, setName] = useState('Taylor');
```

1. The current state of this state variable, initially set to the initial state you provided.
2. The `set` function that lets you change it to any other value in response to interaction.

### create a own useState hook:

```jsx
import ReactDOM from "react-dom/client";
import debounce from "./lib/debounce";
// import App from "./App.jsx";
// import './index.css'

const states = []; // [0: [value,setter],1: [value,setter]]
let stateIndex = -1;

function useState(initialValue) {
  const index = ++stateIndex;
  if (states[index]) return states[index];
  const setValue = (newValue) => {
    states[index][0] = newValue;
    reRenderWithRayhan();
  };

  const returnArray = [initialValue, setValue];
  states[index] = returnArray;
  return returnArray;
}

export default function App() {
  const [todo, setTodo] = useState("");
  const [warning, setWarning] = useState(null);
  const fn = (e) => {
    const inputValue = e.target.value;
    let warning = inputValue.includes(".js")
      ? "This text is included .js, this is not recommended"
      : null;
    setTodo(inputValue);
    setWarning(warning);
    if (e.target.value === "") {
      setTodo("");
      setWarning("");
    }
  };
  const handleInputText = debounce(fn, 500);
  return (
    <div>
      <p>{todo}</p>
      <form>
        <textarea
          onChange={handleInputText}
          name="text"
          cols="30"
          rows="3"
        ></textarea>
      </form>
      <hr />
      <h3>{warning || "Good Choice"}</h3>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
function reRenderWithRayhan() {
  stateIndex = -1
  root.render(<App />);
}
reRenderWithRayhan();
```

### **Caveats for useState Hook:**

- The `set` function **only updates the state variable for the *next* render**. If you read the state variable after calling the `set` function, [you will still get the old value](https://react.dev/reference/react/useState#ive-updated-the-state-but-logging-gives-me-the-old-value) that was on the screen before your call.
- If the new value you provide is identical to the current `state`, as determined by an `[Object.is](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is)` comparison, React will **skip re-rendering the component and its children.** This is an optimization. Although in some cases React may still need to call your component before skipping the children, it shouldn’t affect your code.
- React [batches state updates.](https://react.dev/learn/queueing-a-series-of-state-updates) It updates the screen **after all the event handlers have run** and have called their `set` functions. This prevents multiple re-renders during a single event. In the rare case that you need to force React to update the screen earlier, for example to access the DOM, you can use `[flushSync`.](https://react.dev/reference/react-dom/flushSync)
- Calling the `set` function *during rendering* is only allowed from within the currently rendering component. React will discard its output and immediately attempt to render it again with the new state. This pattern is rarely needed, but you can use it to **store information from the previous renders**. [See an example below.](https://react.dev/reference/react/useState#storing-information-from-previous-renders)
- In Strict Mode, React will **call your updater function twice** in order to [help you find accidental impurities.](https://react.dev/reference/react/useState#my-initializer-or-updater-function-runs-twice) This is development-only behavior and does not affect production. If your updater function is pure (as it should be), this should not affect the behavior. The result from one of the calls will be ignored.