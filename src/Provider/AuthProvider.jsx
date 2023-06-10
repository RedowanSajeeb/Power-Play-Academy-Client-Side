import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../Firebase/firebase.sdk';

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUserEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOutUser = () =>{
    signOut(auth)
  }


  //  onAuthStateChanged
  useEffect(() => {
    const connection = onAuthStateChanged(auth, (currentUser) => {
    //   setloding(false);
      setUser(currentUser);
    });
    return () => {
      return connection();
    };
  }, []);



  const authInfo = {
    createUser,
    user,
    loginUserEmail,
    logOutUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;