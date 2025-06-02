"use client";
import auth from "@/Firebase/firebase.config";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);

  const googleProvider = new GoogleAuthProvider();

  const loginwithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const authInfo = {
    loginwithGoogle,
    setUser,
     user
  };

  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
console.log(currentUser)
setUser(currentUser)
    })
  },[])

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
