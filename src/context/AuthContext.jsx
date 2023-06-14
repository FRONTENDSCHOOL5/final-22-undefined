import React, { createContext, useState } from 'react';

export const AuthContextStore = createContext({
  userToken: localStorage.getItem('token') || null,
  userAccountname: localStorage.getItem('accountname') || null,
  setUserToken: () => {},
  setUserAccountname: () => {},
});

const AuthContext = ({ children }) => {
  cosnt[(userToken, setUserToken)] = useState(localStorage.getItem('token') || null);
  cosnt[(userAccountname, setUserAccountname)] = useState(localStorage.getItem('accountname') || null);
  return (
    <AuthContextStore.Provider value={{ userToken, userAccountname, setUserToken, setUserAccountname }}>
      {children}
    </AuthContextStore.Provider>
  );
};

export default AuthContext;
