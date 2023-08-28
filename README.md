## Date: 18/8/23

1. Higher-order functions get a component in their parameter
2. return a new component
3. higher order function names start with (with). this is convention

code Example:

```jsx
//withCounter.jsx -> HOC function
import React from "react";
export default function withCounter(OriginalComponent) {
  class NewComponent extends React.Component {
    state = { count: 0 };
    handleCounter = () => {
      this.setState((prev) => {
        return { count: prev.count + 1 };
      });
    };
    render() {
      const { count } = this.state;
      return (
        <OriginalComponent count={count} handleCounter={this.handleCounter} />
      );
    }
  }
  return NewComponent;
}

// ClickCounter.jsx
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

//HoverCounter.jsx
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
```