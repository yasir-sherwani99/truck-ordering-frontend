import React, { useState, createContext, useContext } from 'react';

// create a context for authentication
const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    
    const [errors, setErrors] = useState("");
    const [success, setSuccess] = useState("");
    const [authData, setAuthData] = useState({
        user: '',
        token: localStorage.getItem('token'),
        admin_token: localStorage.getItem('admin_token'),
        isAuthenticated: localStorage.getItem('token') ? true : false,
        isAdminAuthenticated: localStorage.getItem('admin_token') ? true : false
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

    const adminlogin = (data) => {
        setAuthData({
            admin_token: localStorage.getItem('admin_token'),
            isAdminAuthenticated: localStorage.getItem('admin_token') ? true : false
        })
    }

    const logout = (data) => {
        setAuthData({
            user: '',
            token: '',
            isAuthenticated: false
        })
    }

    const adminlogut = (data) => {
        setAuthData({
            admin_token: '',
            isAdminAuthenticated: false
        })
    }

    // function to update authentication state (user, token, etc.)
    const updateAuthData = (data) => {
        setAuthData(data);
    };

    // function to set errors
    const setAuthErrors = (errorMessages) => {
        setErrors(errorMessages);
    };

    // function to clear errors
    const clearAuthErrors = () => {
        setErrors("");
    };

    // function to set success message
    const setSuccessMsg = (msg) => {
        setSuccess(msg);
    }

    // function to clear success message
    const clearSuccessMsg = () => {
        setSuccess("");
    }

    return (
        <AuthContext.Provider value={{ authData, login, register, logout, adminlogin, adminlogut, errors, setAuthErrors, clearAuthErrors, success, setSuccessMsg, clearSuccessMsg }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}