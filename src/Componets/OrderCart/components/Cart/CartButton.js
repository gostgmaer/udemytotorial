import classes from "./CartButton.module.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiCartActions } from "../Redux/UiSlice";
const CartButton = (props) => {
  const cartRedux = useSelector((state) => state["cart"]);
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => dispatch(uiCartActions.toggleCart())}
      className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartRedux.totalQuantity}</span>
    </button>
  );
};

export default CartButton;
