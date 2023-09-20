import React from "react";
import Input from "./Input";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }
  componentDidMount() {
    this.inputRef.current.focus();
  }
  render() {
    return (
      <p>
        <Input
          ref={this.inputRef}
          style={{ padding: "4px 2px" }}
          type="text"
          placeholder="Enter your text"
        />
      </p>
    );
  }
}
