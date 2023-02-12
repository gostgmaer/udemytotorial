import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../Redux/Cartreducer";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";

const ProductItem = (item) => {
  const cartRedux = useSelector((state) => state["cart"]);
  const dispatch = useDispatch();

  const addToCartBtn = () => {
    const newTotalQuantity = cartRedux.totalQuantity + 1;

    const updatedItems = cartRedux.cartItems.slice(); // create copy via slice to avoid mutating original state
    const existingItem = updatedItems.find((newItem) => newItem.id === item.id);
    if (existingItem) {
      const updatedItem = { ...existingItem }; // new object + copy existing properties to avoid state mutation
      updatedItem.quantity++;
      updatedItem.totalPrice = updatedItem.totalPrice + item.price;
      const existingItemIndex = updatedItems.findIndex(
        (newItem) => newItem.id === item.id
      );
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems.push({
        id: item.id,
        name: item.title,
        desc: item.description,
        quantity: 1,
        image: item.image,
        price: item.price,
        totalPrice: item.price,
      });
    }

    const newCart = {
      totalQuantity: newTotalQuantity,
      items: updatedItems,
    };

    dispatch(cartActions.replaceCart(newCart));

    // and then send Http request
    // fetch('firebase-url', { method: 'POST', body: JSON.stringify(newCart) })

    // dispatch(
    //   cartActions.addItemToCart({
    //     id,
    //     title,
    //     price,
    //   })
    // );
  };

  return (
    <li className={classes.item}>
      <Card>
        <div className="card">
          <div className="card-header">
            <img
              src={item.image}
              className="card-img-top cover-fill img-thumbnail w-50"
              alt={item.title}
            />
          </div>
        </div>
        <div className="card-body text-start">
          <h4 className="card-title">{item.title}</h4>
          <span className=" text-warning">$ {item.price}</span>
          <h5 className="card-text"> {item.category}</h5>
          <p className="card-text">{item.description}</p>
        </div>
        .
        <div className="card-footer bg-light text-muted">
          <div className={classes.actions}>
            <button onClick={()=>dispatch(cartActions.addItemToCart({
               id: item.id,
               name: item.title,
               desc: item.description,
               quantity: 1,
               image: item.image,
               price: item.price,
               totalPrice: item.price,
            }))}>Add to Cart</button>
          </div>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
