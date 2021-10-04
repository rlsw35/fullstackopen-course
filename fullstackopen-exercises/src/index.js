import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import axios from "axios";
import App from "./App";

axios.get("http://localhost:3001/notes").then((response) => {
  const notes = response.data;
  console.log("notes from index", notes);
  ReactDOM.render(<App notes={notes} />, document.getElementById("root"));
});

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
