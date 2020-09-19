import React, { createContext, useContext, useReducer } from "react";

//Preperes the data layer
export const StateContext = createContext();

//Wrap the app and provide the data layer to every component
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//Pull data from the data layer
export const useStateValue = () => useContext(StateContext);
