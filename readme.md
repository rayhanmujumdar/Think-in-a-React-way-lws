# Element & rendering element

1. How to work element in React Example:

```jsx
// main.jsx
import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// const element = React.createElement("h1", { style: {color: "black"},key: '123' }, `Hello World`);
const root = ReactDOM.createRoot(document.getElementById("root"));
setInterval(() => {
  let element = (
    <h1 key="123" style={{ color: "white" }} tabIndex=" 0">
      Hello {new Date().toLocaleTimeString("bn-BD")}
    </h1>
  );
  root.render(element);
}, 1000);
```

2. React element is a Javascript object

```jsx
// like that
{
	type: "h1",
	props: {
			key: "123",
			style: {color: "white"},
			children: "Hello {time}"
	}
}

```

3. React element are immutable

# Components and props

### Date: 8/3/23

## React Component & props use roles and conditions:

1. We can re-use react component
2. We can send multiple parameter inside the component

```jsx
// code example
// Components receive properties from outside
function Clock({ locale }) {
  return (
    <h1 key="123" style={{ color: "white" }} tabIndex=" 0">
      Hello {new Date().toLocaleTimeString(locale)}
    </h1>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Clock locale="bn-BD" />);
```

1.  Babel will transpile this to valid javascript
2.  Class Component example:

    ```jsx
    class Clock extends React.Component {
    render() {
    return (
    <h1 key="123" style={{ color: "white" }} tabIndex=" 0">
    Hello - {this.props.children} -{new Date().toLocaleTimeString(this.props.locale)}
    </h1>
    );
    }
    }

        const root = ReactDOM.createRoot(document.getElementById("root"));

    \*\*\*\* root.render(<Clock locale="bn-BD" >Test</Clock>);

    ```

    ```

    ```

3.  Never changed props inside components
4.  React component will re-render whenever props change
5.  React component All methods and property inside the Encapsulated
6.  Encapsulated means all functionalities are self-contained

//

# React State & Lifecycle in class:

1. state is “data that changes
2. state is the component’s own data and that is changes or props is outside data like function parameter
3. react only re-render when changing props or state
4. state is component own database
5. state is a javascript object
6. **Do Not Modify State Directly:**

   ```jsx
   // Wrong
   this.state.comment = "Hello";

   // Correct
   this.setState({ comment: "Hello" });
   ```

7. **State Updates May Be Asynchronous:**

   ```jsx
   // Wrong
   this.setState({
     counter: this.state.counter + this.props.increment,
   });

   // Correct
   this.setState((state, props) => ({
     counter: state.counter + props.increment,
   }));
   ```

8. ComponentDidMount() runs after the component has been rendered to the DOM
9. **State Updates are Merged**
10. Never ever Change props inside the component
11. **The Data Flows Down**
    1. This is commonly called a “top-down” or “unidirectional” data flow. Any state is always owned by some specific component, and any data or UI derived from that state can only affect components “below” them in the tree.

### React state class component code example:

1. **componentDidMount()** → This React Lifecycle hook method use to if your component DOM is ready then this hook function automatically invoked
2. **componentWillUnmount() →** This React Lifycycle hook method use to if your component will Unmount that is to say route to another page then method will invoked.

```jsx
import React from "react";
export default class Clock extends React.Component {
  // if props are use to initialize state data then use to constructor method
  constructor(props) {
    super(props);
    this.state = {
      date: props.date,
      count: 0,
      second: 0,
    };
  }
  // otherwise direct setup state static
  // state = { date: new Date() };
  componentDidMount() {
    this.dateId = setInterval(() => {
      // correct way
      this.setState((state, props) => ({
        date: new Date(),
        count: state.count + props.increment,
        second: new Date()
          .toLocaleTimeString("bn-BD")
          .split(":")[2]
          .split(" ")[0],
      }));
      // wrong way: don't update state directly
      // this.state.date = new Date();
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.dateId);
  }

  render() {
    return (
      <div>
        <h1>
          <p style={{ margin: "0" }}>
            setInterval function Call Count - {this.state.count}
          </p>
          <p style={{ margin: "0" }}>
            Hello - {this.props.children} + Second - {this.state.second}
          </p>
          {this.state.date.toLocaleTimeString(this.props.locale)}
        </h1>
      </div>
    );
  }
}
```

//

# React Event Handling & Control re-rendering

## Event Handling Code example:

1. regular call back function inside the this are changing
   1. function() {}
2. arrow function this are not changing
   1. () ⇒ {}
3. Event Handling Code example:

```jsx
import React from "react";
class ClockEvent extends React.Component {
  state = { date: new Date(), toggle: true, locale: "bn-BD" };

  componentDidMount() {
    this.timeId = setInterval(() => {
      this.setState({
        date: new Date(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timeId);
  }
  // if i am using this inside the handleClick function then handleClick must be arrow function
  //arrow function can't change this
  handleClick = (toggle) => {
    console.log(toggle);
    this.setState({
      toggle,
      locale: toggle ? "bn-BD" : "en-US",
    });
  };

  render() {
    return (
      <div>
        <h1>Time - {this.state.date.toLocaleTimeString(this.state.locale)}</h1>
        <button
          type="button"
          onClick={this.handleClick.bind(this, !this.state.toggle)}
          // bind method always return a new function reference
          // basically bind return a new function with custom this
        >
          Click
        </button>
        // i am using Button component next control re-rendering section
      </div>
    );
  }
}

export default ClockEvent;
```

## Control re-rendering:

1. if i am equality check my next or current props and change my props or return new then update my component. update component use lifecycle hook react component → shouldComponentUpdate()
2. if my children component re-render to impact my performance then use shouldComponentUpdate lifycycle function otherwise this not use because shouldComponent have a performance cost
3. control re-rendering code example:

```javascript
import React from "react";
class Button extends React.Component {
  // lifecycle hook
  shouldComponentUpdate(nextProps) {
    const { change: currentChange, toggle: currentToggle } = this.props;
    const { change: nextChange, toggle: nextToggle } = nextProps;
    if (nextChange === currentChange && currentToggle === nextToggle) {
      return false;
    }
    return true;
  }
  render() {
    console.log("render button component");
    const { change, toggle } = this.props;
    console.log(toggle);
    return (
      <button type="button" onClick={() => change(!toggle)}>
        Click
      </button>
    );
  }
}

export default Button;
```

//

# \***\*React Conditional Rendering, List and Keys\*\***

1. You can write this as an `[if`/`else` statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else) like so:

```jsx
// conditional rendering example
import React from "react";
export default class Item extends React.Component {
  render() {
    let item;
    const { name, isPacked } = this.props;
    if (isPacked) {
      item = <li {...this.props}>{name} ✔️</li>;
    } else {
      item = <li {...this.props}>{name}</li>;
    }
    return item;
  }
}
```

1.  \***\*Conditional (ternary) operator (`? :`)**

    ```jsx
    // conditional rendering example
    import React from "react";
    export default class Item extends React.Component {
      render() {
        const { name, isPacked } = this.props;
        return <li {...this.props}>{isPacked ? name + " ✔️" : name} </li>;
      }
    }
    ```

2.  Another common shortcut you’ll encounter is the [JavaScript logical AND (`&&`) operator.](<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND#:~:text=The%20logical%20AND%20(%20%26%26%20)%20operator,it%20returns%20a%20Boolean%20value.>) Inside React components, it often comes up when you want to render some JSX when the condition is true, **or render nothing otherwise.** With `&&`, you could conditionally render the checkmark only if `isPacked` is `true`:
    `jsx
// conditional rendering example
//Logical AND operator (&&)
import React from "react";
export default class Item extends React.Component {
  shouldComponentUpdate(prevProps) {
    const { isPacked: currentIsPacked } = this.props;
    const { isPacked: prevIsPacked } = prevProps;
    if (currentIsPacked === prevIsPacked) return false;
    return true;
  }
  render() {
    console.log("rendering");
    const { name, isPacked, ...props } = this.props;
    return (
      <li {...props}>
        {name} {isPacked && "✔️"}
      </li>
    );
  }
}
`

            ## List and keys:

            - Every component have should a unique key
            ```javascript
            // Code Example:

        import Clock from "./Clock";

function ClockList({ quantities = [] }) {
return (

<div>
{quantities.map((key) => (
// have not any unique key you use Math.random() function
<Clock key={Math.random()} date={new Date()} locale="bn-BD"></Clock>
))}
{quantities.map((key) => (
<Clock key={key} date={new Date()} locale="bn-BD"></Clock>
))}
</div>
);
}

export default ClockList;

````

//

# \***\*React Controlled vs Uncontrolled Component\*\***
**Outline:**

1. This a Controlled input element example:
2. by default react unControlled input element. if you can controlled react input element. example in this below:
3. when i am add value attribute in input element by default react thinking this value controll access get now react. so react oi input value ke readonly kore dey. that’s why amader input e kono kicu write kora jay nah.. er jonno state manage kora lage. example in this below:
4. unControlled means this input element value is controlled by DOM. not React controlled.

```jsx
//This is a React warning:
//react-dom.development.js:86 Warning: You provided a `value` prop to a form field
//without an `onChange` handler. This will render a read-only field. If the field
//should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.

import React from "react";
class Forms extends React.Component {
  myRef = React.createRef();
  state = {
    title: "javascript",
    text: "Javascript is Awesome",
    library: "React",
    isAwesome: false,
  };
  handleChange = (e) => {
    // shortcut way event validation
    const value =
      e.target.name === "isAwesome" ? e.target.checked : e.target.value;
    this.setState({
      [e.target.name]: value,
    });

    // details validation
    // if (e.target.type === "text") {
    //   this.setState({
    //     text: e.target.value,
    //   });
    // } else if (e.target.type === "textarea") {
    //   this.setState({
    //     text: e.target.value,
    //   });
    // } else if (e.target.type === "select-one") {
    //   this.setState({
    //     library: e.target.value,
    //   });
    // } else if (e.target.type === "checkbox") {
    //   this.setState({
    //     isAwesome: e.target.checked,
    //   });
    // } else {
    //   console.log("nothing here");
    // }
  };
  submitHandler(e) {
    e.preventDefault();
    const { title, text, library } = this.state;
    console.log(title, text, library);
  }
  render() {
    console.log(this.state);
    const { title, text, library, isAwesome } = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandler.bind(this)}>
          <input
            onChange={this.handleChange}
            style={{
              padding: "10px 5px",
              borderRadius: "10px",
              border: "none",
            }}
            name="title"
            type="text"
            placeholder="Enter title"
            value={title}
          />
          <br />
          <br />
          <textarea
            style={{ resize: "none" }}
            onChange={this.handleChange}
            name="text"
            cols="40"
            rows={10}
            value={text}
          ></textarea>
          <br />
          <br />
          <select name="library" onChange={this.handleChange} value={library}>
            <option value="React">React</option>
            <option value="Angular">Angular</option>
          </select>
          <br />
          <br />
          <input
            name="isAwesome"
            onChange={this.handleChange}
            type="checkbox"
            checked={isAwesome}
          />
          <br />
          <br />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default Forms;
````
