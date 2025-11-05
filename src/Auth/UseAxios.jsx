import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { Context } from '../ContextApi/SetContext';
import { useNavigate } from 'react-router-dom';
const instance = axios.create({
    baseURL : 'https://kb-fcszt4c44-kawsars-projects-6c73758e.vercel.app/',
    withCredentials : true
})
const UseAxios = () => {
    const {signout} = useContext(Context)
    const navigate = useNavigate()
    useEffect(()=>{
        instance.interceptors.response.use(res=>{
            return res
        }, error=>{
            if(error.status === 401 || error.status === 403){
                signout()
                .then(res=>{
                    navigate('/')
                })
                .catch(err=>{
                    console.log(err)
                })
            }
             return Promise.reject(error);
        })
    },[])
    return instance
};

export default UseAxios;