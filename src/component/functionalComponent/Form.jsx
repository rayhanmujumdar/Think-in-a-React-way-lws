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
