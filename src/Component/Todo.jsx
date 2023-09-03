import { useState } from "react";
import debounce from "../lib/debounce";

export default function Todo() {
  const [todo, setTodo] = useState("");
  const [warning, setWarning] = useState(null);
  const fn = (e) => {
    const inputValue = e.target.value;
    let warning = inputValue.includes(".js")
      ? "This text is included .js, this is not recommended"
      : null;
    setTodo(inputValue);
    setWarning(warning);
    if (e.target.value === "") {
      setTodo("");
      setWarning("");
    }
  };
  const handleInputText = debounce(fn, 500);
  return (
    <div>
      <p>{todo}</p>
      <form>
        <textarea
          onChange={handleInputText}
          name="text"
          cols="30"
          rows="3"
        ></textarea>
      </form>
      <hr />
      <h3>{warning || "Good Choice"}</h3>
    </div>
  );
}
