import React, { useState } from 'react';
import { useAuth } from '../utils/AuthContext';

const AddDocument = () => {
    const { user, addDocument } = useAuth();
    const [name, setName] = useState('');
    const [email, setEmail] = useState(user ? user.email : '');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !email) {
            alert("Please provide both name and email");
            return;
        }

        console.log("Form data:", { name, email }); // Log form data

        try {
            const documentData = { name, email };
            const response = await addDocument(documentData);
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
                <label>Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
