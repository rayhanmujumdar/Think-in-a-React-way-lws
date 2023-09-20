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
