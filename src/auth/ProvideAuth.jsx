import React, { createContext, useState } from "react";

export const authContext = createContext({
  isAuthenticated: false,
  token: '',
  setIsAuthenticated: (auth) => {},
  setToken: (token) => {},
});

function ProvideAuth({ children }) {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState('');

  return (
    <authContext.Provider value={{ isAuthenticated, token, setIsAuthenticated, setToken }}>
      {children}
    </authContext.Provider>
  );
}

export default ProvideAuth;
