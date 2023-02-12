import React from "react";
import { ProductsMock } from "../../../../Assets/StaticData/productsMock";

import InvokeAPI from "../../../../Hooks/apiCallHttp";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {ProductsMock.map((item) => 
        { 
          return <ProductItem key={item.id} {...item}></ProductItem>}
        )}
      </ul>
    </section>
  );
};

export default Products;
