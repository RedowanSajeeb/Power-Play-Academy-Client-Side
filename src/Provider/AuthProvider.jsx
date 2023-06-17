import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.sdk';
import axios from 'axios';

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [loading,setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUserEmail = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIN = () =>{
    setLoading(true)
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
      setUser(currentUser);

      if (currentUser) {
          axios
            .post("https://power-play-academy-server-side-redowansajeeb.vercel.app/jwt", { email: currentUser.email })
            .then((data) => {
              console.log(data.data.token);

              localStorage.setItem("JWTToken", data.data.token);
              setLoading(false);
            });
        }
       else {
        // User is signed out
        localStorage.removeItem("JWTToken");

        setLoading(false);
      }

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
    loading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;