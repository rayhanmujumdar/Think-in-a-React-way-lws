# React Render Props

## Date: 19/8/23

Document outline:

1. (Render Props) Prop that defines render logic
2. Render prop is a function props
3. render props name is must be render that is convention. you can provide any type of name. but the render name is recommended.

```
// app.jsx
import ClickCounter from "./Component/ClickCounter";
import Counter from "./Component/Counter";
import HoverCounter from "./Component/HoverCounter";
import User from "./Component/User";

function App() {
  return (
    <>
      <Counter>
					// Children props
        {(count, incrementHandler) => (
          <ClickCounter count={count} incrementHandler={incrementHandler} />
        )}
      </Counter>
      <Counter>
        {(count, incrementHandler) => (
          <HoverCounter count={count} incrementHandler={incrementHandler} />
        )}
      </Counter>
      <User
				// Use inline props
        render={(isLoggedIn, handleToggle) => (
          <h1 onClick={handleToggle}>{isLoggedIn ? "Rayhan" : "Guest"}</h1>
        )}
      ></User>
    </>
  );
}

export default App;

//ClickCounter.jsx
export default function ClickCounter({ count, incrementHandler }) {
  return (
    <button onClick={incrementHandler} type="button">
      Click {count} times
    </button>
  );
}

//HoverCounter.jsx
export default function HoverCounter({ count, incrementHandler }) {
  return <h1 onMouseOver={incrementHandler}>Hover {count} times</h1>;
}
```