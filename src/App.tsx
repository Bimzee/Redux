import React from 'react';
import logo from './logo.svg';
import './App.css';

import {useSelector,useDispatch} from 'react-redux'
// import { Increase, Decrease } from './Redux/action';
import { increment,decrement,incrementByAmount } from './ToolKit/Reducer';
import { stateType } from './Redux/reducer';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';

function App() {

  const count = useSelector((state: any) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="App">
     <h1>Redux Tool-kit</h1>
     <button onClick={() => dispatch(incrementByAmount(5))}>Increment By 5</button>
     <button onClick={() => dispatch(increment())}>Increment</button>
     <span>{count}</span>
     <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default App;
