import { useContext, useState, useEffect, createContext } from "react";
import React from 'react';
import { account } from "../appwrite/config";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() => {
        checkUserStatus();
    }, []);

    const checkUserStatus = async () => {
        try {
            const currentUser = await account.get();
            setUser(currentUser);
        } catch (e) {
            console.error("No active session", e);
        }
        setLoading(false);
    };

    const loginUser = async (userInfo) => {
        setLoading(true);
        try {
            const currentUser = await account.get();
            if (currentUser) {
                console.log("Already logged in");
                setLoading(false);
                return;
            }
        } catch (e) {
            // No active session, proceed to login
        }
        
        try {
            let response = await account.createEmailPasswordSession(
                userInfo.email,
                userInfo.password
            );
            console.log("SESSION:", response);
            setUser(response);
        } catch (e) {
            console.error(e);
        }
        setLoading(false);
    };

    const logoutUser = async () => {
        setLoading(true);
        try {
            await account.deleteSession('current');
            setUser(null);
        } catch (e) {
            console.error(e);
        }
        setLoading(false);
    };

    const registerUser = (userInfo) => {
        // Registration logic here
    };

    const contextData = {
        user,
        loginUser,
        logoutUser,
        registerUser,
    };

    return (
        <AuthContext.Provider value={contextData}>
            {loading ? <p>Loading...</p> : children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};

export default AuthContext;
