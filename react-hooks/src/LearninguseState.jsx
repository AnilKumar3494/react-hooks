import React, { useState } from "react";
import "./App.css";

//if default state  is passed directly it gets rendered for every click
function defaultState() {
  console.log("This is running");
  return 5;
}
const LearninguseState = () => {
  //   const [count, setCount] = useState(() => {
  //     return defaultState();
  //   });

  //   //using objects in useState()
  //   const [state, setState] = useState({
  //     color: "blue",
  //     count: 6,
  //   });

  //   //we need to pull them about
  //   let color = state.color;
  //   let count = state.count;

  // //using multiple hooks
  const [count, setCount] = useState(() => defaultState());
  const [theme, setTheme] = useState("");

  function incrementCounter() {
    setCount((prevCountValue) => {
      return prevCountValue + 1;
    });
    setTheme("Green");
  }

  function decrementCounter() {
    setCount((prevCount) => prevCount - 1);
    setTheme("red");
  }

  //Learning
  //   //This is an incorrect way as this
  //   function incrementCounter() {
  //     //We are essentailly caliing the exact same thing twice - they are overriding each other
  //     setCount(count + 1);
  //     setCount(count + 1);
  //   }

  /*    //Doing in the right way

  function incrementCounter() {
    setCount((prevCount) => prevCount + 1);
  }

  function decrementCounter() {
    setCount((prevCount) => {
      return prevCount - 1;
    });
  }
*/

  return (
    <div className="use-state state-common-style">
      <h2>Learning useState()</h2>
      <div>
        <button onClick={incrementCounter}>Increment</button>
        <button onClick={decrementCounter}>Decrement</button>
      </div>
      <h3
        style={{
          color: theme,
        }}
      >
        Counter: {count}
      </h3>
    </div>
  );
};

export default LearninguseState;
