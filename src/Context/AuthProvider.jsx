import React, { createContext, useEffect, useState } from "react";
import { getLocalstorage } from "../Utils/localStorage";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const { employee, admin } = getLocalstorage();
    setUserData({ employee, admin });
  },[])


  return (
    <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
