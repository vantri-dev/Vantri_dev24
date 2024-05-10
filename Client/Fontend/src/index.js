import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Context } from "./context/Context";
import reportWebVitals from "./reportWebVitals";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    
      <BrowserRouter>
        <Context>
          <App />
        </Context>
      </BrowserRouter>
   
  </React.StrictMode>
);

reportWebVitals();
