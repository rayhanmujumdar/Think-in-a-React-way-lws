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

2.  \***\*Conditional (ternary) operator (`? :`)**

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

3.  Another common shortcut you’ll encounter is the [JavaScript logical AND (`&&`) operator.](<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND#:~:text=The%20logical%20AND%20(%20%26%26%20)%20operator,it%20returns%20a%20Boolean%20value.>) Inside React components, it often comes up when you want to render some JSX when the condition is true, **or render nothing otherwise.** With `&&`, you could conditionally render the checkmark only if `isPacked` is `true`:

```jsx
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
```

## List and keys:

- Every component have should a unique key

```jsx
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
```

//

# React \***\*Controlled vs Uncontrolled Component\*\***

**Outline:**

1. This a Controlled input element example:
2. by default react unControlled input element. if you can controlled react input element. example in this below:
3. when i am add value attribute in input element by default react thinking this value controll access get now react. so react oi input value ke readonly kore dey. that’s why amader input e kono kicu write kora jay nah.. er jonno state manage kora lage. example in this below:
4. unControlled means this input element value is controlled by DOM. not React controlled.

```javascript
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
```

//

# ****React Lifting State Up****

## **Date: 8/9/23**

******************Outline:******************

1. There Should be a Single “**Source of Truth”** for any data that changes in a React Application.
2. Rely on ****************Tob-Down Data Flow**************** Instead of syncing the state between different components
3. Lifting state involves writing more “****************boilerplate”**************** code but takes less work to find bugs.
4. We can implement any custom logic to reject to transform user input.
5. If something can be derived from either props or state, it probably shouldn’t be in the state.
6. Trace the bugs to their source easily by just moving to the top.

### Code Example:

**Github link**: - [https://github.com/learnwithsumit/thi...](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbGpsM2JxSHZzUjd2S25Lb2hyRkNiSjZFeW9qd3xBQ3Jtc0trUnNnWTM3WkZQM2gweEpXUUM4T0JZbHpTTVg0TERibjlCNWV6TE9RUnE0a1d1UVlTX24xNEc1UDIxOEZ0cV9OS09kWjNYdGowZUhCb0ZObWtya0JZd0pqOXBhSmlic1JtMEU3VUh2NjFsUmZ1RzQ3WQ&q=https%3A%2F%2Fgithub.com%2Flearnwithsumit%2Fthink-in-a-react-way&v=v7UpjUQJjWY) [ branch - "lesson-11" ]

//

# Props drilling problem alternative

# Composition vs Inheritance

### Date: 8/13/23

**inheritance vs composition props/cons:**

1. React are component based library
2. component are tightly couple
3. From child, it’s not clear what parent does
4. not clear about the parent child relation
5. future component are tightly coupled
6. nested extend  - child that already extend other parent

## Inheritance Example: this is not recommended

```jsx
// Inheritance Example:
// React does not recommend this approach

// Emoji.jsx
import React from "react";

export default class Emoji extends React.Component {
  addEmoji = (text, emoji) => {
    return `${emoji} ${text} ${emoji}`;
  };
  render(modifyText) {
    const text = " I love javascript";
    if(modifyText){
        return <div>{modifyText}</div>
    }
    return <div>{text}</div>;
  }
}

//Text.jsx
import Emoji from "./Emoji";
export default class Text extends Emoji {
  constructor(props) {
    super(props);
  }
  render() {
    const modifyText = this.addEmoji("I love Javascript", "💖");
    return super.render(modifyText);
  }
}

//app.jsx
import Text from "./component/inheritance/Text";

function App() {
  return <Text></Text>;
}
export default App;
```

## Composition Example: this is recommended

```jsx
compositon approach are recommended
//Text.jsx
// eslint-disable-next-line react/prop-types
export default function Text({ addEmoji }) {
  let text = "I love Javascript Language";
  return <div>{addEmoji ? addEmoji(text, "💖") : text}</div>;
}

// Emoji.jsx
import React from "react";

export default class Emoji extends React.Component {
  addEmoji = (text, emoji) => {
    return `${emoji} ${text} ${emoji}`;
  };
  render() {
    // eslint-disable-next-line react/prop-types
    const { children } = this.props;
    return children(this.addEmoji);
  }
}

//app.jsx
import Text from "./component/composition/Text";
import Emoji from "./component/composition/Emoji";

function App() {
  return <Emoji>{(addEmoji) => <Text addEmoji={addEmoji}></Text>}</Emoji>;
}
export default App;
```

## Nested Composition code Example:

```jsx
//app.jsx
import Bracket from "./component/composition/Bracket";
import Emoji from "./component/composition/Emoji";
import Text from "./component/composition/Text";

function App() {
  return (
    <Emoji>
      {(addEmoji) => (
        <Bracket>
          {(addBracket) => (
            <Text addEmoji={addEmoji} addBracket={addBracket}></Text>
          )}
        </Bracket>
      )}
    </Emoji>
  );
}
export default App;


//Bracket.jsx
import React from "react";

export default class Bracket extends React.Component {
  addBracket = (text) => {
    return `[ ${text} ]`;
  };

  render() {
    // eslint-disable-next-line react/prop-types
    return this.props.children(this.addBracket);
  }
}

//Emoji.jsx
import React from "react";

export default class Emoji extends React.Component {
  addEmoji = (text, emoji) => {
    return `${emoji} ${text} ${emoji}`;
  };
  render() {
    // eslint-disable-next-line react/prop-types
    return  this.props.children(this.addEmoji);
  }
}

//Text.jsx
// eslint-disable-next-line react/prop-types
export default function Text({ addEmoji, addBracket }) {
  let text = "I love Javascript Language";
  if (addEmoji) {
    console.log({addEmoji})
    text = addEmoji(text, "💖");
    console.log(text)
  }
  if (addBracket) {
    text = addBracket(text);
  }
  return <div>{text}</div>;
}
```

//

# HOC - (Higher order function)

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

//

# React Render Props

## Date: 19/8/23

Document outline:

1. (Render Props) Prop that defines render logic
2. Render prop is a function props
3. render props name is must be render that is convention. you can provide any type of name. but the render name is recommended.

```jsx
// Counter.jsx
// parents components
import React from "react";
export default class Counter extends React.Component {
  state = { count: 0 };
  incrementHandler = () => {
    this.setState((prev) => {
      return {
        count: prev.count + 1,
      };
    });
  };
  render() {
    // eslint-disable-next-line react/prop-types
    const { children } = this.props;
    const { count } = this.state;
    return children(count, this.incrementHandler);
  }
}

// User.jsx
// parent component
import React from "react";
export default class User extends React.Component {
  state = { toggle: false };
  handleToggle = () => {
    this.setState((prevState) => ({
      toggle: !prevState.toggle,
    }));
  };
  render() {
    // eslint-disable-next-line react/prop-types
    const { render } = this.props;
    const { toggle } = this.state;
    return render(toggle, this.handleToggle);
  }
}


```

# Context api
//
# Context API and How to work

## Date: 22/8/23

**outline:**

1. Create a context 

```jsx
const CounterContext = React.createContext()
export default CounterContext
```

1. CounterContext returns two Component
    1. Context.Provider
    2. Context.Consumer
2. Wrap parent with context provider
    
    ```jsx
    import CounterContext from "./CounterContext"
    return (
    	<CounterContext.Provider>
    		<App/>
    	<CounterContext.Provider/>
    )
    ```
    

3. Provide a value of the Context as prop

```jsx
import CounterContext from '/CounterContext'
return (
	<CounterContext.Provider value={{count: 0,incrementCount: incrementCount}}>
		<App/>
	<CounterContext.Provider/>
)
```

1. wrap follows the render props consumer
2. Consumer follows the render prop pattern

```jsx
import CounterContext from '/CounterContext'
return (
	<CounterContext.Consumer>
		({count, incrementCount}) => <HoverCounter count={count} incrementCount={incrementCount}/>
	<CounterContext.Consumer/>
)
```

## Context API implementation Example:

```jsx
// Context.js

// CreateContext is a class Object this have a provider or consumer component
class CreateContext {
  constructor() {
// stored a value to **value** property
    this.value = null;
  }
// provider can get a value and return this children
  Provider = ({ value = null, children = null }) => {
    this.value = value;
    return children;
  };

// consumer is a render props
  Consumer = ({ children }) => {
    return children(this.value);
  };
}

const Context = new CreateContext();

export default Context;

// App.js
import React from "react";
import Toolbar from "./Component/Toolbar";
import ThemeChange from "./Component/ThemeChange";
import Context from "../lib/Context";
class App extends React.Component {
  state = { theme: "light" };
  handleTheme = () => {
    const { theme } = this.state;
    this.setState({
      theme: theme === "light" ? "dark": "light",
    });
  };
  render() {
    const { theme } = this.state;
    return (
      <>
// wrap the component with context.provider
        <Context.Provider value={this.state}>
          <Toolbar></Toolbar>
        </Context.Provider>
        <ThemeChange theme={theme} handleTheme={this.handleTheme}></ThemeChange>
      </>
    );
  }
}

export default App;

// Toolbar
import React from "react";
import Button from "./Button";
import Context from "../../lib/Context";
export default class Toolbar extends React.Component {
  state = { count: 0 };
  handleCounter = () => {
    this.setState(function (prevState) {
      return { count: prevState.count + 1 };
    });
  };
  render() {
    // eslint-disable-next-line react/prop-types
    const { count } = this.state;
    return (
      <>
        <h1>Total Clicked {count}</h1>

// use context.consumer to get stored data
        <Context.Consumer>
          {(value) => (
            <Button theme={value.theme} handleButton={this.handleCounter}>
              Click
            </Button>
          )}
        </Context.Consumer>
      </>
    );
  }
}
```

FAQ******************:******************

1. **When to Use Context**
    1. **Answer**: Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language. For example, in the code below we manually thread through a “theme” prop in order to style the Button component:

//

# Context api - ContextType and useContext

1. if any context api change her value then all consumer are  rerendered 
2. use class component contextType static property for context api value use all around the class component

```jsx
// code example 1:
// ThemeChange.jsx
import ThemeContext from "../context/themeContext";
import Button from "./Button";
import React from "react";
export default class ThemeChange extends React.Component {
	componentDidMount(){
    console.log(this.context)
  }
  render() {
    const { theme, handleTheme } = this.context;
    return (
      <>
        <p>
          Current Theme is <strong>{theme}</strong>
        </p>
        <Button theme={theme} handleButton={handleTheme}>
          {theme}
        </Button>
      </>
    );
  }
}

ThemeChange.contextType = ThemeContext;
```

```jsx
// example 2:
// Section.jsx
import { Component } from "react";
import Toolbar from "../Component/Toolbar";
import ThemeContext from "../context/themeContext";

export default class Section extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    console.log({ nextProps, nextState });
    // this lifecycle method not worked because this component defended of Context Api Consumer
    return false;
  }
  render() {
    const { theme } = this.context;
    const style =
      theme === "dark" ? { backgroundColor: "green", color: "white" } : null;
    return (
      <>
        <h1 style={style}>This is my Counter Section</h1>
        <Toolbar></Toolbar>
      </>
    );
  }
}

Section.contextType = ThemeContext;
```

1. Context API hook (useContext)
    1. useContext get Context api consumer parameter. example in this below
    2. useContext hook return Context api provided value

```jsx
// code example:
import { useContext, useState } from "react";
import Button from "./Button";
import ThemeContext from "../context/themeContext";
export default function Toolbar() {
  const [count, setCount] = useState(0);
//useContext hook get ThemeContext parameter and return ThemeContext value
  const { theme } = useContext(ThemeContext);
  const handleCounter = () => {
    setCount((prev) => {
      return prev + 1;
    });
  };
  const style =
    theme === "dark" ? { backgroundColor: "black", color: "white" } : null;
  return (
    <>
      <h1 style={style}>Total Clicked {count}</h1>
      <Button theme={theme} handleButton={handleCounter}>
        Click
      </Button>
    </>
  );
}
```

1. Best practice of Context api for reduce rendering problem
    1. Sending the Context API provider value to this.state can help prevent unnecessary re-renders.
    2.  When an object is sent as a value, this component can experience frequent re-renders, as objects are reference values.
    3.  If a parent component updates any state or props, it triggers a re-render in this component, causing the Context API value
    4. to be sent and a new object reference to be created.
    5. To optimize performance and avoid unnecessary re-renders, it's recommended to utilize React's internal state management.
    6. By maintaining state using React's state mechanism (this.state), re-renders can be controlled more effectively. Unlike
    7. object values from the Context API, React's state management retains its reference, helping to prevent excessive re-renders.

```jsx
import React from "react";
import ThemeContext from "./context/themeContext";
import ThemeChange from "./Component/ThemeChange";
import Section from "./Component/Section";

class App extends React.Component {
  state = {
    theme: "light",
    handleTheme: () => {
      const { theme } = this.state;
      this.setState({
        theme: theme === "light" ? "dark" : "light",
      });
    },
  };
  render() {
    return (
      <>
        <ThemeContext.Provider value={this.state}>
          <Section></Section>
          <ThemeChange></ThemeChange>
        </ThemeContext.Provider>
      </>
    );
  }
}

export default App;
```

//
# Hooks:
# React Hooks

### Date: 27/08/23

outline:

- React Class Component
    
    **React Class Component problems:** 
    
    - Complex States → X
    - Lifecycle Methods → X
    - Sharing Same logic → X
    - Duplicate Code → X
    
    Class Component Code Example:
    
    ```jsx
    import React from "react";
    import Post from "./Post";
    
    export default class Posts extends React.Component {
      state = { isLoading: false, isError: false, posts: [] };
      style = {
        postsContainer: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: 'wrap'
        },
      };
      componentDidMount() {
        this.setState({
          loading: true,
        });
        fetch("https://jsonplaceholder.typicode.com/posts")
          .then((res) => res.json())
          .then((data) =>
            this.setState({
              loading: false,
              posts: data,
            })
          )
          .catch(() => {
            this.setState({
              isError: true,
              isLoading: false,
            });
          });
      }
      render() {
        const { isLoading, isError, posts } = this.state;
        const { postsContainer } = this.style;
        let content = null;
        if (isLoading && !isError) content = <p>Loading...</p>;
        else if (!isLoading && isError) content = <p>Something was wrong</p>;
        else if (!isLoading && !isError && posts.length === 0)
          content = <p>Not Found</p>;
        else if (!isLoading && !isError && posts.length > 0) {
          content = posts.map((post) => <Post key={post.id} post={post} />);
        }
        return <div style={postsContainer}>{content}</div>;
      }
    }
    ```
    
- React Functional Component
    
    **Functional Component Benefit and what’s problem solving:**
    
    - Complex States → ✔️
    - Lifecycle Methods → ✔️
    - Sharing Same logic → ✔️
    - Duplicate Code → ✔️
    
    **Functional Component code Example:**
    
    ```jsx
    import { useEffect, useState } from "react";
    import Post from "./Post";
    export default function Posts() {
    // The useState hook helps to manage state problems within components.
      const [posts, setPosts] = useState([]);
      const [isLoading, setIsLoading] = useState(false);
      const [isError, setIsError] = useState(false);
      const [error, setError] = useState({});
    // An alternative to the componentDidMount method is the useEffect hook. By using this hook, all side effect problems can be solved.
      useEffect(() => {
        setIsLoading(true);
        fetch("https://jsonplaceholder.typicode.com/posts")
          .then((res) => res.json())
          .then((data) => {
            setPosts(data);
            setIsLoading(false);
          })
          .catch((err) => {
            setIsLoading(false);
            setIsError(true);
            setError(err);
          });
      }, []);
      let content = null;
      if (isLoading && !isError) {
        content = <p>Loading...</p>;
      } else if (!isLoading && isError) {
        content = <p>Something was wrong</p>;
      } else if (!isLoading && !isError && posts.length === 0) {
        content = <p>{error.message}</p>;
      } else if (!isLoading && !isError && posts.length > 0) {
        content = posts.map((post) => <Post key={post.id} post={post} />);
      }
      return (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {content}
        </div>
      );
    }
    ```
    
1. Hook Only used for Functional component
2. Feb 16,2019 → React Hooks introduced → v16.8

## Some Point to Note

- Hooks are available from React Version 16.8 +
- Hook don’t Contain any breaking changes & it 100% backward compatible
- Hooks are optional & classes won’t be removed from React
- Hooks can’t be used inside class component.
- Hooks don’t replace your existing React knowledge. it just provides a more direct api to the React concepts you already know

### Class Component vs Function Component  Compare:

**Class Component:**

```jsx
import React from "react";
import Post from "./Post";

export default class Posts extends React.Component {
  state = { isLoading: false, isError: false, posts: [] };
  style = {
    postsContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: 'wrap'
    },
  };
  componentDidMount() {
    this.setState({
      loading: true,
    });
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          loading: false,
          posts: data,
        })
      )
      .catch(() => {
        this.setState({
          isError: true,
          isLoading: false,
        });
      });
  }
  render() {
    const { isLoading, isError, posts } = this.state;
    const { postsContainer } = this.style;
    let content = null;
    if (isLoading && !isError) content = <p>Loading...</p>;
    else if (!isLoading && isError) content = <p>Something was wrong</p>;
    else if (!isLoading && !isError && posts.length === 0)
      content = <p>Not Found</p>;
    else if (!isLoading && !isError && posts.length > 0) {
      content = posts.map((post) => <Post key={post.id} post={post} />);
    }
    return <div style={postsContainer}>{content}</div>;
  }
}
```

**Functional Components:**

```jsx
import { useEffect, useState } from "react";
import Post from "./Post";
export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState({});
  useEffect(() => {
    setIsLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsError(true);
        setError(err);
      });
  }, []);
  let content = null;
  if (isLoading && !isError) {
    content = <p>Loading...</p>;
  } else if (!isLoading && isError) {
    content = <p>Something was wrong</p>;
  } else if (!isLoading && !isError && posts.length === 0) {
    content = <p>{error.message}</p>;
  } else if (!isLoading && !isError && posts.length > 0) {
    content = posts.map((post) => <Post key={post.id} post={post} />);
  }
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {content}
    </div>
  );
}
```
//

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

//
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

```jsx
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
//
# useCallback & useMemo hooks

### useCallback hook:

- ekta callback function ke mone rakhte ebong shudu matro tokhoni vule jabe jokhon “ei function ti je je jinish gulor upor nirbor kore segulo poriborton hobe.

### useMemo hook:

- ekta function - er return value ke mone rakhbe ebong shodu matro tokhoni vule jabe jokhon “ei function ta ja ja jinish gulor upor nirbor kore” segulor poriborton hobe.

### Reference Link:

1. useCallback hook from React docs

[useCallback – React](https://react.dev/reference/react/useCallback)

2. useMemo hook from React docs
3. [useMemo – React](https://react.dev/reference/react/useMemo)

//

# useReducer Hook

**Date: 21/9/23**

******************Concept:******************

- useReducer is a React Hook. This hook usage to state management.
- useState() hook বানানো হয়েছে useReducer() এর উপর base করে
- useReducer() hook useState() hook এর একটা বিকল্প।
- useReducer() হচ্ছে React - এ State Change করারা একটা mechanism

## reduce vs useReducer

| reduce | useReducer |
| --- | --- |
| array.reduce(reducer,initialValue) | useReducer(reducer,initialState) |
| singleReturnValue = reducer(accumulator,itemValue) | newState = reducer(currentState,action) |
| returns a single value | returns a tuple - [newState,dispatch] |
|  |  |

## Usege:

****`useReducer(reducer, initialArg, init?)`**

### **Parameters**

- `reducer`: The reducer function that specifies how the state gets updated. It must be pure, should take the state and action as arguments, and should return the next state. State and action can be of any types.
- `initialArg`: The value from which the initial state is calculated. It can be a value of any type. How the initial state is calculated from it depends on the next `init` argument.
- **optional** `init`: The initializer function that should return the initial state. If it’s not specified, the initial state is set to `initialArg`. Otherwise, the initial state is set to the result of calling `init(initialArg)`.

### **Returns**

`useReducer` returns an array with exactly two values:

1. The current state. During the first render, it’s set to `init(initialArg)` or `initialArg` (if there’s no `init`).
2. The `[dispatch` function](https://react.dev/reference/react/useReducer#dispatch) that lets you update the state to a different value and trigger a re-render.

### **Caveats**

- `useReducer` is a Hook, so you can only call it **at the top level of your component** or your own Hooks. You can’t call it inside loops or conditions. If you need that, extract a new component and move the state into it.
- In Strict Mode, React will **call your reducer and initializer twice** in order to [help you find accidental impurities.](https://react.dev/reference/react/useReducer#my-reducer-or-initializer-function-runs-twice) This is development-only behavior and does not affect production. If your reducer and initializer are pure (as they should be), this should not affect your logic. The result from one of the calls is ignored.

## References:
[useReducer – React](https://react.dev/reference/react/useReducer)

//

1. useRef code example:
    
    ```jsx
    //Time.jsx
    import { useEffect, useRef, useState } from "react";
    
    export default function Time() {
      const [time, setTime] = useState(new Date());
      const intervalRef = useRef();
      useEffect(() => {
        intervalRef.current = setInterval(tick, 1000);
        return () => {
          clearInterval(intervalRef.current);
        };
      }, []);
      const tick = () => {
        setTime(new Date());
      };
      return (
        <div>
          <p>{time.toLocaleTimeString()}</p>
          <p>
            <button
              type="button"
              onClick={() => clearInterval(intervalRef.current)}
            >
              CleanUp
            </button>
          </p>
        </div>
      );
    }
    ```
    
2. forwardRef code example:
    
    ```jsx
    	//Form.jsx
    import { useEffect, useRef } from "react";
    import Input from "../functionalComponent/Input";
    
    export default function Form() {
      const inputRef = useRef();
      useEffect(() => {
          // dom did loaded
          inputRef.current.focus()
      }, []);
      return (
        <p>
          <Input
            ref={inputRef}
            style={{ padding: "4px 2px" }}
            type="text"
            placeholder="Enter your text"
          />
        </p>
      );
    }
    ```
    

```jsx
// Input.jsx
import React from "react";

// eslint-disable-next-line react-refresh/only-export-components
function Input({ type, placeholder, ...props }, ref) {
  return (
    <input ref={ref} {...props} type={type} placeholder={placeholder}></input>
  );
}

const forwardRef = React.forwardRef(Input);
export default forwardRef;
```

## Reference:

1. useRef

[useRef – React](https://react.dev/reference/react/useRef)

1. forwardRef

[forwardRef – React](https://react.dev/reference/react/forwardRef)

//

**Date : 25/09/2023**

### custom hook Code Example:

1. you can use custom hook anywhere if you need to repeat same logic
2. create a own custom hook

```jsx
import { useCallback, useEffect, useState } from "react";
const useResizeScreen = (screenSize) => {
  const [onScreenSize, setScreenSize] = useState(false);
  // if you defined controlScreenSize function outside the useEffect hook but use in inside the useEffect hook
  // please must be use useCallback hook
  // because function can every render return a new reference
  // that's way every render controlScreenSize function will be defined a new Reference in useEffect dependence
  /*
  const controlScreenSize = useCallback(() => {
    setScreenSize(window.innerWidth < screenSize);
  }, [screenSize]); 
  */
  useEffect(() => {
    // best practice
    const controlScreenSize = () => {
      setScreenSize(window.innerWidth < screenSize);
    };
    controlScreenSize();
    window.addEventListener("resize", controlScreenSize);
    return () => window.removeEventListener("resize", controlScreenSize);
  }, [screenSize]);
  return [onScreenSize, setScreenSize];
};

export default useResizeScreen;
```

1. custom hook use code example:
    
    ```jsx
    // LayoutComponentOne.jsx
    import useResizeScreen from "../hooks/useResizeScreen";
    
    export default function LayoutComponentOne() {
      const [onScreenSize] = useResizeScreen(800);
      return (
        <div>You are browsing on {onScreenSize ? "small" : "large"} device</div>
      );
    }
    
    // LayoutComponentTwo.jsx
    import useResizeScreen from "../hooks/useResizeScreen";
    export default function LayoutComponentTwo() {
      const [onScreenSize] = useResizeScreen(600);
      return (
        <div className={onScreenSize ? "small" : "large"}>
          This is our another component
        </div>
      );
    }
    ```
    

## Reference:

[Reusing Logic with Custom Hooks – React](https://react.dev/learn/reusing-logic-with-custom-hooks)

