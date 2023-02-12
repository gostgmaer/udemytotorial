const { createSlice } = require("@reduxjs/toolkit");

const initialState = { cartItems: [], totalQuantity: 0, totalPrice: 0 };
const CartSlicer = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      state.totalQuantity++
      if (!existingItem) {
        state.cartItems.push({
          ...action.payload,
          ...{ quantity: 1, totalPrice: newItem.price },
          // id: newItem.id,
          // name: newItem.name,
          // desc: newItem.desc,
          // image: newItem.image,
          // price: newItem.price,
          // quantity: 1,
          // totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);
      state.totalQuantity--
      if (existingItem.quantity === 1) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
    resetCart(state) {
      state.cartItems = [];
    },
  },
});
export const counterActions = CartSlicer.actions;

export default CartSlicer.reducer;
