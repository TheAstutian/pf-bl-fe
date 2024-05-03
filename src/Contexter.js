import {createContext, useState, useEffect} from 'react'
import axios from 'axios';
import { API_URL } from './App';
import { current } from '@reduxjs/toolkit';

export const AuthContext = createContext()

export const AuthContextProvider = ({children})=>{
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('user')) || null)
    
    const login = async(inputs)=>{
        const res = await axios.post(`${API_URL}/login`, inputs)
        setCurrentUser(res.data)
    }

    const logout = async(inputs)=>{
        await axios.post(`${API_URL}/logout`)
        setCurrentUser(null)
    }

    useEffect(()=>{
        localStorage.setItem("user", JSON.stringify(currentUser))
    }, [current])

    return (
        <AuthContext.Provider value ={{currentUser,login,logout}}>{children}</AuthContext.Provider>
    )
}