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
