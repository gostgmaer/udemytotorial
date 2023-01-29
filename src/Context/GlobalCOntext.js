
import React, { useState,useReducer, useContext,useEffect } from "react";

import { v4 as uuidv4 } from "uuid";
import { data } from "../Assets/StaticData/ExpenseList";

const AppContext = React.createContext(null);

const AppProvider = ({ children }) => {


  const [expanseHistory, setExpanseHistory] = useState([]);
  const [expense, setExpense] = useState(data);
  const [getYear, setGetYear] = useState(null);
  const [modal, setModal] = useState(false);


  const modalhandler =()=>{
    setModal(!modal)
  }


  return (
    <AppContext.Provider
      value={{
        expense, setExpense,expanseHistory, setExpanseHistory,getYear, setGetYear,modalhandler,modal
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
