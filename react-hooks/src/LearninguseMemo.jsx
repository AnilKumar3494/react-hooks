import React, { useEffect, useMemo, useState } from "react";

const LearninguseMemo = () => {
  const [inputNumber, setInputNumber] = useState(2);

  //doubling the inputNumber and to see how it can increase slowness.
  //   const doubler = slowFunction(inputNumber);

  //now using useMemo() to sort of cache the value and only the funcation when the 'inputNnumber' changes.
  const doubler = useMemo(() => {
    return slowFunction(inputNumber);
  }, [inputNumber]); //Dependency Similar to useEffect()

  //theme change
  const [darkTheme, setDarkTheme] = useState(false);

  //objects in JS changes every execution as they are not referenced by value, so this makes it to rerender everytime
  //so to prevent it from re-rendering we use the useMemo() to only change when darkTheme is changed
  const themeStyle = useMemo(() => {
    return {
      padding: "0.7rem",
      backgroundColor: darkTheme ? "grey" : "white",
      color: darkTheme ? "white" : "black",
    };
  }, [darkTheme]);

  //seeing re-render
  const themeChanged = useEffect(() => {
    console.log("Theme is Changed");
  }, [themeStyle]);

  //Front end
  return (
    <div className="state-common-style use-memo">
      <h2>Learning useMemo()</h2>
      <div>
        <input
          type="number"
          value={inputNumber}
          onChange={(e) => {
            setInputNumber(parseInt(e.target.value));
          }}
        />
        {/* <p>{inputNumber}</p> */}
        <button
          onClick={() => {
            setDarkTheme((prevDark) => !prevDark);
          }}
        >
          Change Theme
        </button>
      </div>
      <h3 style={themeStyle}>Doubling Input: {doubler}</h3>
    </div>
  );
};

export default LearninguseMemo;

//this function slows down our application as it needs to iterate through all the i's and it gets re-rendered for every click
function slowFunction(numFromInput) {
  for (let i = 0; i <= 100000000; i++) {}
  return numFromInput * 2;
}
