import { createContext, useState } from "react";
import { getUserFromCookie, getAdminFromCookie, setUserCookie, clearUserCookie } from '../helpers/cookieManager';
import { useNavigate } from "react-router-dom";


export const authContext = createContext({});

const Provider = authContext.Provider;


export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(getUserFromCookie());
    const [isAdmin, setIsAdmin] = useState(getAdminFromCookie());
    const navigate = useNavigate();

    const loginUser = (token) => {
        setIsLoggedIn(true);
        setUserCookie(token);
        navigate('/');
    }

    const logoutUser = () => {
        setIsLoggedIn(false);
        clearUserCookie();
        navigate('/login');
    }

    const loginAdmin = () => {
        setIsAdmin(true);
        navigate('/');
    }

    const logoutAdmin = () => {
        setIsAdmin(false);
        navigate('/login');
    }
    
    const value = {
        isLoggedIn,
        isAdmin,
        setIsLoggedIn,
        loginUser,
        logoutUser,
        loginAdmin,
        logoutAdmin
    }


    return (
        <Provider value={value}>
            {children}
        </Provider>
    )
}
