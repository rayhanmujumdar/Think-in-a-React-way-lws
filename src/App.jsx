import Title from "./component/Title";
import ShowCount from "./component/ShowCount";
import Button from "./component/Button";
import { useCallback, useMemo, useState } from "react";

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const incrementOne = useCallback(() => {
    setCount1(count1 + 1);
  }, [count1]);
  const incrementFive = useCallback(() => {
    setCount2((prev) => prev + 5);
  }, []);

  const isEvenORodd = useMemo(() => {
    let i = 0;
    while (i < 1000000000) i += 1;
    return count1 % 2 === 0;
  }, [count1]);
  return (
    <>
      <Title></Title>
      <ShowCount count={count1} title="Counter 1" />
      <span>{isEvenORodd ? "even" : "odd"}</span>
      <Button increment={incrementOne}> Increment by One</Button>
      <hr />
      <ShowCount count={count2} title="Counter 2" />
      <Button increment={incrementFive}> Increment by Five</Button>
    </>
  );
}

export default App;
