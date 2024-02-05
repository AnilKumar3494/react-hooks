import React, { useState } from "react";

const LearninguseMemo = () => {
  const [inputNumber, setInputNumber] = useState(2);
  let doubler = inputNumber * 2;

  //Front end
  return (
    <div className="state-common-style use-memo">
      <h2>Learning useMemo()</h2>
      <div>
        <input
          type="number"
          value={inputNumber}
          onChange={(e) => {
            setInputNumber(e.target.value);
          }}
        />
        <p>{inputNumber}</p>
        <button>Change Theme</button>
      </div>
      <h3>Doubling Input: {doubler}</h3>
    </div>
  );
};

export default LearninguseMemo;
