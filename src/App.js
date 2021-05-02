import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const devide3 = () =>
    setCount((previousCount) => {
      return previousCount % 3 === 0 ? previousCount / 3 : previousCount;
    });

  return (
    <div>
      <div>count: {count}</div>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setCount(0)}>reset</button>
      <button onClick={devide3}>devide3</button>
    </div>
  );
};

export default App;
