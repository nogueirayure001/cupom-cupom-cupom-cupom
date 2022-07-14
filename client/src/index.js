import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { Reset } from "./reset.styles";
import { GlobalStyles } from "./global.styles";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Reset />
    <GlobalStyles />

    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// reportWebVitals();
