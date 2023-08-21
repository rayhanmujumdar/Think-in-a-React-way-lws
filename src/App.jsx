import ClickCounter from "./Component/ClickCounter";
import Counter from "./Component/Counter";
import HoverCounter from "./Component/HoverCounter";
import User from "./Component/User";

function App() {
  return (
    <>
      {/* two different way to use render props */}
      {/* 1. you can use render props in children */}
      <Counter>
        {(count, incrementHandler) => (
          <ClickCounter count={count} incrementHandler={incrementHandler} />
        )}
      </Counter>
      <Counter>
        {(count, incrementHandler) => (
          <HoverCounter count={count} incrementHandler={incrementHandler} />
        )}
      </Counter>
      {/* 2. you can use render props in props and this props name is render */}
      <User
        render={(isLoggedIn, handleToggle) => (
          <h1 onClick={handleToggle}>{isLoggedIn ? "Rayhan" : "Guest"}</h1>
        )}
      ></User>
    </>
  );
}

export default App;
