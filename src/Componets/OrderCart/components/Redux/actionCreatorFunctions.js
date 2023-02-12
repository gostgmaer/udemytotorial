import InvokeAPI from "../../../../Hooks/apiCallHttp";
import { cartActions } from "./Cartreducer";
import { uiCartActions } from "./UiSlice";

export const sendCartData = (cartData) => {
  // return {
  //   type:'',payload:
  // }
  return async (dispatch) => {
    dispatch(
      uiCartActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      })
    );
    const updateDataToFirebase = async () => {
      const res = await InvokeAPI(
        `cartData.json`,
        "PUT",
        JSON.stringify(cartData),
        {},
        {}
      );
    };

    try {
      await updateDataToFirebase();
      dispatch(
        uiCartActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!",
        })
      );
    } catch (error) {
     
      dispatch(
        uiCartActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      );
    }
  };
};
export const getCartData = () => {
  return async (dispatch) => {
    const getDataFromFirebase = async () => {
      const res = await InvokeAPI(`cartData.json`, "get", {}, {}, {});
      return res;
    };

    try {
     const cartData= await getDataFromFirebase();
     
    
     dispatch(cartActions.replaceCart({
        items: cartData.cartItems || [],
        totalQuantity: cartData.totalQuantity,
      }))
    } catch (error) {
    
      dispatch(
        uiCartActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching cart data failed!",
        })
      );
    }
  };
};
