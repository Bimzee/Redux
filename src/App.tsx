import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { useSelector, useDispatch } from "react-redux";
import Counter from "./components/counter";
// import { Increase, Decrease } from './Redux/action';

function App() {
  return <Counter />;
}

export default App;
