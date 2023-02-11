import React from "react";
import { useDispatch, useSelector } from "react-redux";

const ReduxCounter = () => {
  const counter = useSelector((state) => state.count);
  const show = useSelector((state)=>state.showCounter)
  const dispatch = useDispatch();
  return (
    <div className="ReduxCounter">
      <div className="card">
       {show&& <div className="card-body">
          <h5 className="card-title">Value: {counter}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button
            className="btn btn-primary"
            onClick={() => dispatch({ type: "inc" })}>
            Increase
          </button>
          <button
            className="btn btn-primary"
            onClick={() => dispatch({ type: "incr",amount:5 })}>
            Increase 5
          </button>
          <button
            onClick={() => dispatch({ type: "dec" })}
            className="btn btn-warning">
            Decress
          </button>
        </div>}
      </div>
      <button  onClick={() => dispatch({ type: "toggle" })} className="btn btn-primary" type="button" >
   Toggle Counter
  </button>
    </div>
  );
};

export default ReduxCounter;
