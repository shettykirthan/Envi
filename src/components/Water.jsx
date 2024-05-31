import React, { useState } from 'react';
import './componentscss.css';

const Water = ({ setCalculatedData }) => {
  const [people, setPeople] = useState(1);
  const [waterGallon, setWaterGallon] = useState(1);
  const [calculatedFootprint, setCalculatedFootprint] = useState(null);

  const handleSubmit = () => {
    const houseHold = parseFloat(people);
    const gallon = parseFloat(waterGallon);
    const calculatedFootprintValue = (houseHold * gallon * 365 / 100 * 0.001).toFixed(2);
    
    setCalculatedData(prev => ({ ...prev, waterFootprint: calculatedFootprintValue }));
    setCalculatedFootprint(calculatedFootprintValue);
  };

  return (
    <div className="flight-container">
      <h2>Water carbon footprint calculator</h2>
      <div className="form-container">
        <div className="input-group">
          <label>How many people are in your household?</label>
          <input 
            type="number" 
            value={people} 
            onChange={(e) => setPeople(e.target.value)} 
          />
        </div>
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
