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
