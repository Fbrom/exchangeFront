import { createContext, useReducer } from "react";

import appReducer from "./appReducer";

const initialState = { exchanges: [] };

export const GlobalExchange = createContext(initialState);

export const ContextProvider = ({ children }) => {
  
    const [state, dispatch] = useReducer(appReducer, initialState);

  const createExchange = (finalExchange) => {
    dispatch({ type: "CREATE_EXCHANGE", payload: finalExchange});
  };

  return (
    <GlobalExchange.Provider value={{ ...state, createExchange }}>
      {children}
    </GlobalExchange.Provider>
  );
};
