import React, { createContext, use, useEffect, useState } from "react";
import { getLocalstorage } from "../Utils/localStorage";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const { Employess, Admin } = getLocalstorage();
    setUserData({ Employess, Admin });
  },[]);
  return (
    <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
