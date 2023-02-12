const { createSlice } = require("@reduxjs/toolkit");

const initialState = { showCart: false };
const UISlicer = createSlice({
  name: "Cart Ui show",
  initialState,
  reducers: {
    toggleCart(state) {
      state.showCart = !state.showCart;
      console.log(state.showCart);
    },
  },
});
export const uiCartActions = UISlicer.actions;

export default UISlicer.reducer;
