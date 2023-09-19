import React from "react";
// import MyComponentClass from "./component/MyComponentClass";
import MyComponent from "./component/MyComponent";
export default class App extends React.Component {
  state = {
    toggle: true,
  };
  render() {
    const { toggle } = this.state;
    return (
      <div>
        {toggle && <MyComponent />}
        <button
          type="button"
          onClick={() => this.setState((prev) => ({ toggle: !prev.toggle }))}
        >
          {toggle ? "time hide" : "time show"}
        </button>
      </div>
    );
  }
}
