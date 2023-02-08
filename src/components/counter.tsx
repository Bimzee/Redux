import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";
import { useDispatch, useSelector, connect } from "react-redux";
import classes from "./Counter.module.css";

const Counter = (props: {
  inc: () => void;
  dec: () => void;
  count:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
}) => {
  //   const count = useSelector((state: any) => state.counter);
  //   const dispatch = useDispatch();
  const incHandler = () => {
    // dispatch({ type: "INC" });
    props.inc();
  };
  const decHandler = () => {
    // dispatch({ type: "DEC" });
    props.dec();
  };
  const toggleCounterHandler = () => {};
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{props.count}</div>
      <div>
        <button onClick={incHandler}>INC</button>
        <button onClick={decHandler}>DEC</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

const mapStateToProps = (state: { counter: any }) => {
  return {
    count: state.counter,
  };
};

const mapDispatchToProps = (dispatch: (arg0: { type: string }) => any) => {
  return {
    inc: () => dispatch({ type: "INC" }),
    dec: () => dispatch({ type: "DEC" }),
  };
};
// connect accepts 2 functions as parameters,
// mapStateToProps equivalent to useSelectot. this enables us to access the store
// mapDispatchToProps equivalent to useDispatch. used to invode dispatch methods
// The argumens provided to connect will be available in props of the component.
// After the arguments the connect invokes the Component itself.
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
