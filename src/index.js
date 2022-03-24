import React from "react";
import ReactDOM from "react-dom";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import SignUp from "./Components/Signup";
import Login from "./Components/Login";
import PageNotFound from "./Components/PageNotFound";
import "./Styles/Index.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <BrowserRouter>
    <Nav />
    <Routes>
      <Route path="*" element={<PageNotFound />} />
      <Route path="/" element={<Home />} />
      <Route path="/Signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();
