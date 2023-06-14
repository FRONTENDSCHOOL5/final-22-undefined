import React, { createContext, useState } from 'react';

export const AuthContextStore = createContext({
  userToken: localStorage.getItem('token') || null,
  userAccountname: localStorage.getItem('accountname') || null,
  setUserToken: () => {},
  setUserAccountname: () => {},
});

const AuthContext = ({ children }) => {
  const [userToken, setUserToken] = useState(localStorage.getItem('token') || null);
  const [userAccountname, setUserAccountname] = useState(localStorage.getItem('accountname') || null);
  return (
    <AuthContextStore.Provider value={{ userToken, userAccountname, setUserToken, setUserAccountname }}>
      {children}
    </AuthContextStore.Provider>
  );
};

export default AuthContext;
