import ReactDOM from "react-dom/client";
import debounce from "./lib/debounce";
// import App from "./App.jsx";
// import './index.css'

const states = []; // [0: [value,setter],1: [value,setter]]
let stateIndex = -1;

function useState(initialValue) {
  const index = ++stateIndex;
  if (states[index]) return states[index];
  const setValue = (newValue) => {
    states[index][0] = newValue;
    reRenderWithRayhan();
  };

  const returnArray = [initialValue, setValue];
  states[index] = returnArray;
  return returnArray;
}

export default function App() {
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
const root = ReactDOM.createRoot(document.getElementById("root"));
function reRenderWithRayhan() {
  stateIndex = -1
  root.render(<App />);
}
reRenderWithRayhan();
