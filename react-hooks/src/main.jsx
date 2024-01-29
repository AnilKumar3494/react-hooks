import React from "react";
import ReactDOM from "react-dom/client";

import "./styles.css";
import "./index.css";
import LearninguseState from "./LearninguseState.jsx";
import LearninguseEffect from "./LearninguseEffect.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LearninguseState />
    <LearninguseEffect />
  </React.StrictMode>
);
