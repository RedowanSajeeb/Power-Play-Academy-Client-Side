import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../Firebase/firebase.sdk';

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
const auth = getAuth(app);

const createUser = (email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password);
}
const loginUserEmail = (email, password) =>{
    return signInWithEmailAndPassword(auth, email, password);
}
    const authInfo = {
      createUser,
      loginUserEmail,
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;