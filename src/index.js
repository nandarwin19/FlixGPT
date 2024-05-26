import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //We got 2 api. That is because of React.StrictMode. But for only local ( while developing )
<<<<<<< HEAD
  <React.StrictMode>
    <App />
  </React.StrictMode>
=======
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
>>>>>>> a97b99f9e9b53f85a0dfe540ec605f2598d9256e
);

reportWebVitals();
