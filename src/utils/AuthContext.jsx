    import { useContext, useState, useEffect, createContext } from "react";
    import React from 'react';
    import { account, databases } from "../appwrite/config";

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
                await account.createEmailPasswordSession(
                    userInfo.email,
                    userInfo.password
                );
                const currentUser = await account.get();
                setUser(currentUser);
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

        const addDocument = async (documentData, documentId = null) => {
            if (!user) {
                throw new Error("User is not authenticated");
            }
        
            console.log("Adding document with data:", documentData); // Log document data
        
            try {
                let response;
                if (documentId) {
                    response = await databases.updateDocument(
                        '665999ea0028d0f501a9', // Replace with your database ID
                        '6659a5ae0027611de231', // Replace with your collection ID
                        documentId, // Document ID to update
                        documentData
                    );
                } else {
                    response = await databases.createDocument(
                        '665999ea0028d0f501a9', // Replace with your database ID
                        '6659a5ae0027611de231', // Replace with your collection ID
                        'unique()', // Unique ID for the document
                        documentData
                    );
                }
                console.log("Document response:", response);
                return response;
            } catch (error) {
                console.error("Error adding document:", error);
                throw error; // Ensure error is thrown to be caught in the component
            }
        };
        

        const contextData = {
            user,
            loginUser,
            logoutUser,
            registerUser,
            addDocument,
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
