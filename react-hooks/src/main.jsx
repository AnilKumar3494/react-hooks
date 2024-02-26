import React from "react";
import ReactDOM from "react-dom/client";

import "./styles.css";
import "./index.css";
import Particlebg from "./Particlebg";
import LearninguseState from "./LearninguseState.jsx";
import LearninguseEffect from "./LearninguseEffect.jsx";
import LearninguseMemo from "./LearninguseMemo.jsx";
// import Header from "./components/Header.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Particlebg />
    <LearninguseState />
    <LearninguseEffect />
    <LearninguseMemo />
  </React.StrictMode>
);
