import React from "react";

// eslint-disable-next-line react-refresh/only-export-components
function Input({ type, placeholder, ...props }, ref) {
    console.log(ref)
  return (
    <input ref={ref} {...props} type={type} placeholder={placeholder}></input>
  );
}

const forwardRef = React.forwardRef(Input);
export default forwardRef;
