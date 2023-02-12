import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../Redux/Cartreducer";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";

const ProductItem = (item) => {

const dispatch =useDispatch()


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
            <button onClick={()=>dispatch(counterActions.addItemToCart(
              {
                id: item.id,
                name: item.title,
                desc: item.description,
                image: item.image,
                price: item.price,
              }
            ))}>Add to Cart</button>
          </div>
        </div>
      
      </Card>
    </li>
  );
};

export default ProductItem;
