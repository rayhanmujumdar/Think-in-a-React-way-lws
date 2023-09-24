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