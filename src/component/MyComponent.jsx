import { useEffect, useState } from "react";

export default function MyComponent() {
  const [date, setDate] = useState(new Date());
  const [count, setCount] = useState(0);
  const addClick = () => {
    setCount((prev) => {
      return prev + 1;
    });
  };
  const tick = () => {
    console.log("timer on");
    setDate(new Date());
  };

  // useEffect use for timer
  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  // useEffect use for DOM
  useEffect(() => {
    document.title = `Clicked ${count} times`;
  }, [count]);
  return (
    <div>
      <p>Time: {date.toLocaleTimeString("bn")}</p>
      <p>
        <button type="button" onClick={addClick}>
          Click
        </button>
      </p>
    </div>
  );
}
