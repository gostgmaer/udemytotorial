import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./CounterSlice";



const store = configureStore({ reducer: { counter: counterReducer } });
// const store = configureStore({ reducer:  counterSlicer.reducer });

export default store;
