import React, { useState, createContext, useContext } from 'react';

// create a context for authentication
const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    
    const [errors, setErrors] = useState("");
    const [authData, setAuthData] = useState({
        user: '',
        token: localStorage.getItem('token'),
        isAuthenticated: localStorage.getItem('token') ? true : false
    });

    const register = (data) => {
        setAuthData({
            user: data.user,
            token: data.token,
            isAuthenticated: localStorage.getItem('token') ? true : false
        })
    }

    const login = (data) => {
        setAuthData({
            user: data.user,
            token: data.accessToken,
            isAuthenticated: localStorage.getItem('token') ? true : false
        })
    }

    const logout = (data) => {
        setAuthData({
            user: '',
            token: '',
            isAuthenticated: false
        })
    }

    // Function to update authentication state (user, token, etc.)
    const updateAuthData = (data) => {
        setAuthData(data);
    };

    // Function to set errors
    const setAuthErrors = (errorMessages) => {
        setErrors(errorMessages);
    };

    // Function to clear errors
    const clearAuthErrors = () => {
        setErrors("");
    };

    return (
        <AuthContext.Provider value={{ authData, login, register, logout, errors, setAuthErrors, clearAuthErrors }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}