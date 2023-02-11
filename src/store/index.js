import { configureStore, createSlice } from "@reduxjs/toolkit";
import { createStore } from "redux";

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
const counterReducer = (state = initialState, action) => {
  if (action.type === "inc") {
    return { count: state.count + 1, showCounter: state.showCounter };
  }
  if (action.type === "dec") {
    return { count: state.count - 1, showCounter: state.showCounter };
  }
  if (action.type === "incr") {
    return {
      count: state.count + action.amount,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "toggle") {
    return { showCounter: !state.showCounter, count: state.count };
  }
  return state;
};

const store = configureStore({ reducer: { counter: counterSlicer.reducer } });
// const store = configureStore({ reducer:  counterSlicer.reducer });
export const counterActions = counterSlicer.actions
export default store;
