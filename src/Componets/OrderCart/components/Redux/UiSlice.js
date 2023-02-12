const { createSlice } = require("@reduxjs/toolkit");

const initialState = { showCart: false, notification: null };
const UISlicer = createSlice({
  name: "Cart Ui show",
  initialState,
  reducers: {
    toggleCart(state) {
      state.showCart = !state.showCart;
      console.log(state.showCart);
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});
export const uiCartActions = UISlicer.actions;

export default UISlicer.reducer;
