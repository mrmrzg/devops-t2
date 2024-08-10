import React, { useState } from "react";

function Calculator() {
  const [result, setResult] = useState(0);

  const add = (a, b) => {
    setResult(a + b);
  };

  const subtract = (a, b) => {
    setResult(a - b);
  };

  return (
    <div>
      <h1>Calculator</h1>
      <p>Result: {result}</p>
      <button onClick={() => add(5, 3)}>Add</button>
      <button onClick={() => subtract(5, 3)}>Subtract</button>
    </div>
  );
}

export default Calculator;
