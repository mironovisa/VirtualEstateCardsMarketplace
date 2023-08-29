import { createContext, useState } from "react";
import { clearStorageUser, getStorageIsLogin, setStorageUser, setStorageToken, clearStorageToken } from "./storage";
import { useNavigate } from "react-router-dom";

export const authContext = createContext({});

const Provider = authContext.Provider;


export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(getStorageIsLogin());
    const navigate = useNavigate();

    const login = (userId, token) => {
        setIsLoggedIn(true);
        setStorageUser(userId);
        setStorageToken(token);
        navigate('/');
    }

    const logout = () => {
        setIsLoggedIn(false);
        clearStorageUser();
        clearStorageToken();
        navigate('/login');
    }

    const value = {
        isLoggedIn,
        logout,
        login,
        setIsLoggedIn
    }


    return (
        <Provider value={value}>
            {children}
        </Provider>
    )
}
