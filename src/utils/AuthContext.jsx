import { useContext, useState, useEffect, createContext } from "react";
import React from 'react';
import { account, databases } from "../appwrite/config";
import { COLLECTION_ID_USERS, DATABASE_ID } from "../appwrite/appwriteConfig";

const AuthContext = createContext();

const Loader = () => {
  const loaderStyle = {
    border: '10px solid #f3f3f3', /* Light grey */
    borderTop: '10px solid #3498db', /* Blue */
    borderRadius: '50%',
    width: '90px',
    height: '90px',
    animation: 'spin 1s linear infinite'
  };
  const loaderContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh' // Full viewport height to center vertically
  };

  return (
    <div style={loaderContainerStyle}>
      <div style={loaderStyle}></div>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};
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
          DATABASE_ID, // Replace with your database ID
          COLLECTION_ID_USERS, // Replace with your collection ID
          documentId, // Document ID to update
          documentData
        );
      } else {
        response = await databases.createDocument(
          DATABASE_ID, // Replace with your database ID
          COLLECTION_ID_USERS, // Replace with your collection ID
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
      {loading ? <Loader /> : children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext;
