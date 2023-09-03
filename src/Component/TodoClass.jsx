import { Component } from "react";
import debounce from "../lib/debounce";

export default class TodoClass extends Component {
  constructor(props) {
    super(props);
    this.handleInputText = debounce(this.handleInputText, 500);
    this.state = { todo: "", warning: "" };
  }
  handleInputText = (e) => {
    const inputValue = e.target.value;
    let warning = inputValue.includes(".js")
      ? "This text is included .js, this is not recommended"
      : null;

    this.setState({
      todo: inputValue,
      warning,
    });
    if (e.target.value === "") {
      this.setState({
        todo: "",
        warning: "",
      });
    }
  };
  render() {
    const { todo, warning } = this.state;
    return (
      <div>
        <p>{todo}</p>
        <form>
          <textarea
            onChange={this.handleInputText}
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
}
