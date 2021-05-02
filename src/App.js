import React, { useState } from "react";

const App = (props) => {
  const [name, setName] = useState("サンプル");
  const [price, setPrice] = useState(1000);
  return (
    <div>
      <p>
        現在の{name}は、{price}円です。
      </p>
      <button onClick={() => setPrice(price + 1)}>+1</button>
      <button onClick={() => setPrice(price - 1)}>-1</button>
      <button onClick={() => setPrice(1000)}>reset</button>
      <input value={name} onChange={(e) => setName(e.target.value)} />
    </div>
  );
};

export default App;
