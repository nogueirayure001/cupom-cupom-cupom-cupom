import React from "react";
import ReactDOM from "react-dom/client";

import { Reset } from "./reset.styles";
import { GlobalStyles } from "./global.styles";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Reset />
    <GlobalStyles />
    <App />
  </React.StrictMode>
);

// reportWebVitals();
