import React, { createContext, useReducer } from "react";
import appReducer from "./appReducer";
import { appContextModel, initialStateAppReducer } from "./constants";

export const AppContext = createContext(appContextModel);

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialStateAppReducer);

  return (
    <AppContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
