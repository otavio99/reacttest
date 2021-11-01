import React, { createContext, useReducer } from "react";

export const authContext = createContext();

function ProvideAuth({ children }) {

  let userAuthState =  { isAuthenticated: true};

  return (
    <authContext.Provider value={userAuthState}>
      {children}
    </authContext.Provider>
  );
}

export default ProvideAuth;
