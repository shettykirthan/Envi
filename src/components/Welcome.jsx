import React, { useState } from 'react';
import "./componentscss.css"; // Import your CSS file for styling
import { useAuth } from '../utils/AuthContext';
const Welcome = ({ setCalculatedData, documentId }) => {
  const { user, addDocument } = useAuth();
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  

  const handleSubmit = async () => {
    

    const documentData = {
      email: user.email,
      Country:country,
      State:state,

      
     
    };
  
    try {
      await addDocument(documentData, documentId);
      
    } catch (error) {
      console.error("Error adding vehicle data:", error);
      if (error.response && error.response.data) {
        console.error("Appwrite error response:", error.response.data);
      }
      alert("Failed to add vehicle data");
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
       
        </div>
        <button onClick={handleSubmit}>save</button>
        <center><p>Next, select the appropriate tab above to calculate the part of your lifestyle you are most interested in, e.g. your flights.</p>
        <p>Or, visit each of the tabs above to calculate your full carbon footprint.</p>
        <p>Following your calculation, you can offset / neutralise your emissions through one of our climate-friendly projects.</p></center>
      </div>
    
  );
};

export default Welcome;
