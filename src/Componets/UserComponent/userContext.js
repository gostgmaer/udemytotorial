import React, { useState, useReducer, useContext, useEffect } from "react";

import { v4 as uuidv4 } from "uuid";

const UserContext = React.createContext(null);

const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [itemHistory, setItemHistory] = useState(null);
  const [error, setError] = useState("");

  return (
    <UserContext.Provider
      value={{
        users,
        setUsers,
        isOpen,error, setError,
        setIsOpen,
        itemHistory,
        setItemHistory,
      }}>
      {children}
    </UserContext.Provider>
  );
};
// make sure use
export const useUserContext = () => {
  return useContext(UserContext);
};

export { UserContext, UserProvider };
