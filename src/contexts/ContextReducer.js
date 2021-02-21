import { createContext, useReducer } from "react";
import { initialState, reducer } from "reduces/reduce";

export const StoreContext = createContext();

export const StateContextProvider = ({ children }) => (
  <StoreContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StoreContext.Provider>
);
