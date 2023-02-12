import { configureStore } from "@reduxjs/toolkit";
import Cartreducer from "../Componets/OrderCart/components/Redux/Cartreducer";
import UIreducer from "../Componets/OrderCart/components/Redux/UiSlice";
import counterReducer from "./CounterSlice";

const store = configureStore({
  reducer: { counter: counterReducer, cart: Cartreducer, uiCart: UIreducer },
});
// const store = configureStore({ reducer:  counterSlicer.reducer });

export default store;
