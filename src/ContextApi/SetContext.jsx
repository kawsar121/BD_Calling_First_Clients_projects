import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.init";

export const Context = createContext(null)
const SetContext = ({children}) => {
    const [user, SetUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Sign In
    const signUpUser = (email,password) =>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth,email,password)
    }

    // Sign Up
    const loginUser = (email,password)=>{
        setLoading(true)
       return signInWithEmailAndPassword(auth,email,password)
       
    }
    //Sign Outs
    const signout = ()=>{
        setLoading(true)
        return signOut(auth)
    }

    // Collect user info
    useEffect(()=>{
        const Usercollection = onAuthStateChanged(auth, (currentUser)=>{
            SetUser(currentUser)
            setLoading(false)
        })
        return Usercollection
       
    },[])


    const info ={
        signUpUser,
        loginUser,
        user,
        loading,
        signout
    }
    return (
        <Context.Provider value={info}>
            {children}
        </Context.Provider>
    );
};

export default SetContext;