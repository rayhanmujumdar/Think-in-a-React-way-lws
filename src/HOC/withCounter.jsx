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
