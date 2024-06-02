import React, { useState } from 'react';
import "./componentscss.css"; // Import your CSS file for styling
import { useAuth } from '../utils/AuthContext';
import img from "../assests/saved.svg";

const Welcome = ({ setDocumentId }) => {
  const { user, addDocument } = useAuth();
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(''); // New state for error message

  const handleSubmit = async () => {
    // Validation check
    if (!country || !state) {
      setError('Please fill out all fields');
      return;
    }

    const documentData = {
      email: user.email,
      Country: country,
      State: state,
    };

    try {
      const response = await addDocument(documentData);
      setDocumentId(response.$id); // Store document ID
      setIsSubmitted(true); // Update submission status
      setError(''); // Clear error message
    } catch (error) {
      console.error("Error adding document:", error);
      alert("Failed to add document");
    }
  };

  return (
    <div className="welcome-container">
      <center><h2>Welcome to the web's leading carbon footprint calculator</h2></center>
      <div className="form-container">
        <p>First, please tell us where you live:</p>
        <div className="input-group">
          <label htmlFor="country">Country:</label>
          <input
            type="text"
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="state">State:</label>
          <input
            type="text"
            id="state"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </div>
        {error && <p className="error-message">{error}</p>} {/* Display error message */}
      </div>

      {!isSubmitted ? (
        <button onClick={handleSubmit}>Save</button>
      ) : (
        <button>
          <img src={img} alt="Saved" />
        </button>
      )}
      
      <center>
        <p>Next, select the appropriate tab above to calculate the part of your lifestyle you are most interested in, e.g. your flights.</p>
        <p>Or, visit each of the tabs above to calculate your full carbon footprint.</p>
        <p>Following your calculation, you can offset / neutralise your emissions through one of our climate-friendly projects.</p>
      </center>
    </div>
  );
};

export default Welcome;
