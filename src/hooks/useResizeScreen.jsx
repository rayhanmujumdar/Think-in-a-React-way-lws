import { useEffect, useState } from "react";
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
