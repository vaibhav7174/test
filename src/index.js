import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Home from "./components/Home/Home";
import Detail from "./components/Details/Details";
import Navbar from "./components/Navbar";
import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/:id" element={<Detail />} />
      </Routes>
    </Router>
  </Provider>,
  document.getElementById("root")
);
