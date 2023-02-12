import classes from './CartItem.module.css';
import React from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from '../Redux/Cartreducer';
const CartItem = (item) => {
 
  const dispatch = useDispatch()

  return (
    <li className={classes.item}>
      <header>
        <h3>{item.name}</h3>
        <div className={classes.price}>
          ${item.totalPrice.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${item.price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{item.quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={()=>dispatch(cartActions.removeItemFromCart(
              item.id
            ))}>-</button>
          <button onClick={()=>dispatch(cartActions.addItemToCart(
              {
                id: item.id,
                name: item.name,
                desc: item.description,
                image: item.image,
                price: item.price,
              }
            ))}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
