import React, { useState } from 'react';
// import "./componentscss.css"; // Import your CSS file for styling
import { useAuth } from '../utils/AuthContext';
import img from "../assests/saved.svg";
import "./componentscss.css";

const Welcome = ({ setDocumentId, setIsFormSubmitted }) => {
  const { user, addDocument } = useAuth();
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [Date, setDate] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(''); // New state for error message

  const handleSubmit = async () => {
    // Validation check
    if (!country || !state || !Date) {
      setError('Please fill out all fields');
      return;
    }

    const documentData = {
      email: user.email,
      user_id: user.$id,
      Country: country,
      State: state,
      Date: Date,
    };

    try {
      const response = await addDocument(documentData);
      setDocumentId(response.$id); // Store document ID
      setIsSubmitted(true); // Update submission status
      setIsFormSubmitted(true); // Notify parent component
      setError(''); // Clear error message
    } catch (error) {
      console.error("Error adding document:", error);
      alert("Failed to add document");
    }
  };

  return (
    <div className="main-comp-container">
    <div className="welcome-container">
      <h2 className='h2_comp'>Welcome to the web's leading carbon footprint calculator</h2>
      <div className="form-container">
        <p>First, please tell us where you live:</p>
        <div className="input-group">
          <label htmlFor="country" className='country'>Country:</label>
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
        <div className="input-group">
          <label htmlFor="state">Date: </label>
          <input
            type="text"
            id="Date"
            value={Date}
            placeholder='YYYY-MM-DD'
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        {error && <p className="error-message">{error}</p>} {/* Display error message */}
      </div>

      {!isSubmitted ? (
        <button className='welcome_button' onClick={handleSubmit}>Save</button>
      ) : (
        <button className='welcome_button'>
          <img src={img} alt="Saved" />
        </button>
      )}
      
      <center>
        <p>Next, select the appropriate tab above to calculate the part of your lifestyle you are most interested in, e.g. your flights.</p>
        <p>Or, visit each of the tabs above to calculate your full carbon footprint.</p>
        <p>Following your calculation, you can offset / neutralise your emissions through one of our climate-friendly projects.</p>
      </center>
    </div>
    </div>
  );
};

export default Welcome;