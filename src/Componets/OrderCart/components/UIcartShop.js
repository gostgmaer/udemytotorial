import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./Cart/Cart";
import Layout from "./Layout/Layout";
import { getCartData, sendCartData } from "./Redux/actionCreatorFunctions";
import { cartActions } from "./Redux/Cartreducer";
import Products from "./Shop/Products";
import Notification from "./UI/Notifications";


const UIcartShop = () => {
  const showCart = useSelector((state) => state["uiCart"].showCart);
  const cartData = useSelector((state) => state["cart"]);
  const notification = useSelector((state) => state["uiCart"].notification);
  const dispatch = useDispatch();

  useEffect(() => {
    if (cartData.ischange) {
      // @ts-ignore
      dispatch(sendCartData(cartData));
    }
  
  }, [cartData, dispatch]);

  useEffect(() => {
     // @ts-ignore
    dispatch(getCartData())
 
    
  }, [dispatch]);
  
  // dispatch(
  //   uiCartActions.showNotification({
  //     status: "pending",
  //     title: "Sending...",
  //     message: "Sending cart data!",
  //   })
  // );

  // useEffect(() => {
  //   if (cartData.cartItems.length !== 0) {
  //     updateDataToFirebase();
  //   }
  // }, [cartData,dispatch]);

  // const updateDataToFirebase = async () => {
  //   try {
  //     const res = await InvokeAPI(
  //       `cartData.json`,
  //       "PUT",
  //       JSON.stringify(cartData),
  //       {},
  //       {}
  //     );

  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };
  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <div className="UIcartShop">
        <Layout>
          {showCart && <Cart></Cart>}
          <Products></Products>
        </Layout>
      </div>
    </Fragment>
  );
};

export default UIcartShop;
