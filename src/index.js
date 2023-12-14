import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //We got 2 api. That is because of React.StrictMode. But for only local ( while developing )
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);

reportWebVitals();
