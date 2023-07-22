import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authInfo, setAuthInfo] = useState({
    loggedIn: localStorage.getItem('token') !== null,
    userName: localStorage.getItem('name') || ''
  });

  const updateAuthInfo = () => {
    setAuthInfo({
      loggedIn: localStorage.getItem('token') !== null,
      userName: localStorage.getItem('name') || ''
    });
  };

  return (
    <AuthContext.Provider value={{ authInfo, updateAuthInfo }}>
      {children}
    </AuthContext.Provider>
  );
};
