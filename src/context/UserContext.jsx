import { createContext, useContext, useEffect, useState } from 'react';
import {  signOut } from "firebase/auth";
import { auth } from "../services/firebase";

const LoggedContext = createContext();

export const LoggedProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || {});
  
  const login = (user) => {
    setIsLogged(true);
    localStorage.setItem("user", JSON.stringify(user));
    setUser(JSON.parse(localStorage.getItem("user")) || {});
  };
  const logout = () => {
    localStorage.removeItem("user");
    signOut(auth);
    setIsLogged(false);
    setUser({});
  }

  useEffect(() => {
    if (user && user.email) {
      setIsLogged(true);
    }
  }, [user]);
  
  return (
    <LoggedContext.Provider value={{ isLogged, login, logout, user }}>
      {children}
    </LoggedContext.Provider>
  );
};

export const useLogged = () => useContext(LoggedContext);
