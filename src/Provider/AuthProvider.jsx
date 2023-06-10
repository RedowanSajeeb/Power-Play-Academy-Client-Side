import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.sdk';

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUserEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIN = () =>{
    return signInWithPopup(auth, googleProvider)
  }

  // Update a user's profile

  const userProfileUpdate = (name, photoUrl, phoneNumber) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoUrl,
      phoneNumber: phoneNumber,
    })
      .then(() => {
        // Profile updated!
        // ...
      })
      .catch((error) => {
        // An error occurred
        // ...
      });
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
    googleSignIN,
    userProfileUpdate,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;