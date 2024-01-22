import React from "react";
import "./App.css";

const LearninguseState = () => {
  let count = 0;

  return (
    <div>
      <div>
        <button>Increment</button>
        <button>Decrement</button>
        <span>Counter: {count}</span>
      </div>
    </div>
  );
};

export default LearninguseState;
