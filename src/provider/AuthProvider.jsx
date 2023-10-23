import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";



export const AuthContext = createContext();
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    // createUser
    const createUser =(email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }

    // signin user
    const loginUser = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    // google user
    const googleUser = () =>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider)
    }
    // logout
    const logOut =() =>{
        setLoading(true)
        return signOut(auth)
    }

    // current user
    useEffect(()=>{
      const unsubscribe =  onAuthStateChanged(auth,currentuser =>{
            setUser(currentuser)
            setLoading(false);
        })
        return () =>{
            return unsubscribe;
        }
    },[])
  

    const authInfo = {
      user,
      loading,
      createUser,
      loginUser,
      googleUser,
      logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;