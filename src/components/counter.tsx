import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  const count = useSelector((state: any) => state.counter);
  const dispatch = useDispatch();
  const incHandler = () => {
    dispatch({ type: "INC" });
  };
  const decHandler = () => {
    dispatch({ type: "DEC" });
  };
  const toggleCounterHandler = () => {};
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{count}</div>
      <div>
        <button onClick={incHandler}>INC</button>
        <button onClick={decHandler} >DEC</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
