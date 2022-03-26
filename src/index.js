import React from "react";
import ReactDOM from "react-dom";
import "./Styles/Index.scss";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import AppRoute from "./Components/Routes";

ReactDOM.render(
  <BrowserRouter>
    <AppRoute />
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();
