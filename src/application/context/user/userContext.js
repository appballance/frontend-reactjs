import React, { createContext, useReducer } from "react";
import { initialStateContext, userContextModel } from "./constants";

import { UserReducer } from "./userReducer";

const UserContext = createContext(userContextModel);

function UserProvider({ children }) {
  const [state, dispatch] = useReducer(UserReducer, initialStateContext);

  return (
    <UserContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };
