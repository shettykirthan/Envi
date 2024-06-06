import React, { useState } from 'react';
import { useAuth } from '../utils/AuthContext';
import './componentscss.css';

const Water = ({ setCalculatedData, documentId }) => {
  const { user, addDocument } = useAuth();
  const [people, setPeople] = useState(1);
  const [waterGallon, setWaterGallon] = useState('');
  const [calculatedFootprint, setCalculatedFootprint] = useState(null);

  const handleSubmit = async () => {
    const houseHold = parseFloat(people);
    const gallon = parseFloat(waterGallon);
    const calculatedFootprintValue = (houseHold * gallon * 365 / 100 * 0.001).toFixed(2);
    
    setCalculatedData(prev => ({ ...prev, waterFootprint: calculatedFootprintValue }));
    setCalculatedFootprint(calculatedFootprintValue);

    const documentData = {
      email: user.email,
      gallons_of_water_used_per_day: parseFloat(gallon),
      
     
    };
  
    try {
      await addDocument(documentData, documentId);
      
    } catch (error) {
      console.error("Error adding vehicle data:", error);
      if (error.response && error.response.data) {
        console.error("Appwrite error response:", error.response.data);
      }
      alert("Failed to add water data");
    }
  };


  return (
    <div className="welcome-container">
      <h2 className='h2_comp'>Water carbon footprint calculator</h2>
      <div className="form-container">
        
        <div className="input-group">
          <label>How many gallons of water used per day?:</label>
          <input 
            type="number" 
            value={waterGallon} 
            onChange={(e) => setWaterGallon(e.target.value)} 
          />
        </div>
        <button onClick={handleSubmit}>Calculate Water Footprint</button>
        {calculatedFootprint !== null && (
          <p>Your household's water footprint is {calculatedFootprint} metric tons of CO2.</p>
        )}
      </div>
    </div>
  );
};

export default Water;
