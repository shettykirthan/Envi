import React, { useState } from 'react';
import { useAuth } from '../utils/AuthContext';

const AddDocument = () => {
    const { user, addDocument } = useAuth();
    const [user_id, setUser_id] = useState('');
    const [email, setEmail] = useState(user ? user.email : '');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!user_id || !email) {
            alert("Please provide both user_id and email");
            return;
        }

        console.log("Form data:", { user_id, email }); // Log form data

        try {
            // Add user_id to the documentData
            const documentData = { user_id, email };
            const response = await addDocument(documentData); // Add the document to the database
            alert("Document added successfully");
            console.log("Document response:", response); // Log response
        } catch (error) {
            console.error("Error adding document:", error);
            alert("Failed to add document");
        }
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>user_id:</label>
                <input
                    type="text"
                    value={user_id}
                    onChange={(e) => setUser_id(e.target.value)}
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <button type="submit">Add Document</button>
        </form>
    );
};

export default AddDocument;