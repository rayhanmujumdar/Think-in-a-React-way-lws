# ****Reusing Logic with Custom Hooks****

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
[Reusing logic with custom hooks - React]
(https://react.dev/learn/reusing-logic-with-custom-hooks)
