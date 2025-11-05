import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.init";
import axios from "axios";

export const Context = createContext(null)
const provider = new GoogleAuthProvider();
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
    
    // Google Sign
    const googleSignIn = () =>{
        setLoading(true)
        return signInWithPopup(auth,provider)
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
            // console.log(currentUser?.email)
            // Set Cookie and remove cookie
            if(currentUser?.email){
               const userEmail = {email : currentUser.email};
               axios.post('https://kb-fcszt4c44-kawsars-projects-6c73758e.vercel.app//jwt', userEmail, {withCredentials:true})
               .then(res=> {
                console.log(res.data); 
                setLoading(false)
            })
            }    
            else{
                axios.post('https://kb-fcszt4c44-kawsars-projects-6c73758e.vercel.app//logout',{}, {withCredentials:true})
                .then(res=> {
                    console.log(res.data);
                    setLoading(false)
                })
            }
            
        })
        return Usercollection
       
    },[])


    const info ={
        signUpUser,
        loginUser,
        user,
        loading,
        signout,
        googleSignIn
    }
    return (
        <Context.Provider value={info}>
            {children}
        </Context.Provider>
    );
};

export default SetContext;