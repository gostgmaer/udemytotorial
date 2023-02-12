const { createSlice } = require("@reduxjs/toolkit");

const initialState = { count: 0, showCounter: true };
const counterSlicer = createSlice({
  name: "count",
  initialState,
  reducers: {
    increment(state) {
      state.count++;
      console.log( state.count);
    },
    decrement(state) {
      state.count--;
    },
    increase(state, action) {
      state.count = state.count + action.payload;
    },
    toggleBtn(state) {

      state.showCounter = !state.showCounter;
      console.log(state.showCounter);
    },
  },
});
export const counterActions = counterSlicer.actions

export default counterSlicer.reducer