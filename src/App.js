import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("circle norm");

  const plus = () => {
    const newCount = count + 1;
    if (newCount >= 1) {
      setColor("circle norm");
    }
    if (newCount >= 15) {
      setColor("circle hot");
    }

    setCount(newCount);
  };
  const minus = () => {
    const newCount = count - 1;
    if (newCount <= 14) {
      setColor("circle norm");
    }
    if (newCount <= 0) {
      setColor("circle coold");
    }

    setCount(newCount);
  };

  return (
    <div className="App">
      <div className={color}>{count} C</div>
      <div className="flexk">
        <button className="button1" onClick={plus}>
          +
        </button>
        <button className="button1" onClick={minus}>
          -
        </button>
      </div>
    </div>
  );
}

export default App;
