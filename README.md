# useEffect Hook

## React’s Responsibilities:

- Render/re-render UI & React to user Input/actions
  - Render JSX code
  - Manage state & props
  - React to Events/Inputs
  - Evaluating State/Props Change
- Side-Effects
  - Anything Other than React’s Responsibilities
  - Fetching Data From any api
  - updating the DOM
  - setting any Subscriptions or timers

## Side Effect in Class Component:

- using life cycle methods: example
  - componentWillUnmount()
  - componentDidUpdate()
  - componenentDidMount()
- class Component side effect problem:
  - Repeating Code
  - Unorganized code

```jsx
//MyComponentClass.jsx
// life cycle methods problem:
// Repeating Code
// Unorganized code
import React from "react";
export default class MyComponentClass extends React.Component {
  state = {
    count: 0,
    date: new Date(),
  };
  addClick() {
    this.setState((prev) => ({
      count: prev.count + 1,
    }));
  }
  componentDidMount() {
    const { count } = this.state;
    document.title = `Clicked ${count} times`;
    this.timer = setInterval(this.tick.bind(this), 1000);
  }
  componentDidUpdate() {
    const { count } = this.state;
    document.title = `Clicked ${count} times`;
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  tick() {
    this.setState({
      date: new Date(),
    });
  }
  render() {
    const { date } = this.state;
    return (
      <div>
        <p>Time: {date.toLocaleTimeString("bn")}</p>
        <p>
          <button type="button" onClick={this.addClick.bind(this)}>
            Click
          </button>
        </p>
      </div>
    );
  }
}
```

## useEffect Hook:

- Help us perform side effects in functional component
- Solves all the problems of lifecycle methods in class component
- Replaces componentDidMount(), componentWillUnmount() & componenentDidMount()

useEffect Code Example:

```javascript
//MyComponent.jsx
import { useEffect, useState } from "react";

export default function MyComponent() {
  const [date, setDate] = useState(new Date());
  const [count, setCount] = useState(0);
  const addClick = () => {
    setCount((prev) => {
      return prev + 1;
    });
  };
  const tick = () => {
    console.log("timer on");
    setDate(new Date());
  };

  // useEffect use for timer
  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  // useEffect use for DOM
  useEffect(() => {
    document.title = `Clicked ${count} times`;
  }, [count]);
  return (
    <div>
      <p>Time: {date.toLocaleTimeString("bn")}</p>
      <p>
        <button type="button" onClick={addClick}>
          Click
        </button>
      </p>
    </div>
  );
}
```
