import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const cartItem = useSelector((state) => state["cart"].cartItems);
 const cartRedux = useSelector((state) => state["cart"]);
  console.log(cartRedux);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
       {cartItem?.map(item=><CartItem key={item.id} {...item}></CartItem>) }
      </ul>
    </Card>
  );
};

export default Cart;
