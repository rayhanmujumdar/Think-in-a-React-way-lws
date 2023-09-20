import React, { Component } from "react";

class Input extends Component {
  render() {
    console.log(this.props);
    const { type, placeholder, innerRef, ...props } = this.props;
    return (
      <input ref={innerRef} {...props} type={type} placeholder={placeholder} />
    );
  }
}

const inputForwardRef = React.forwardRef((props, ref) => (
  <Input {...props} innerRef={ref} />
));

export default inputForwardRef;
