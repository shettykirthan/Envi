import React, { useState } from 'react';
import './componentscss.css'; // Make sure to import the CSS file


const Motorbike = () => {
    const [mileage, setMileage] = useState('');
    const [type, setType] = useState('');
    const [efficiency, setEfficiency] = useState('');
  
    return (
      <div className="motorbike-container">
        <h2>Motorbike carbon footprint calculator</h2>
        <div className="form-container">
          <div className="input-group">
            <label>Mileage (miles):</label>
            <input 
              type="number" 
              value={mileage} 
              onChange={(e) => setMileage(e.target.value)} 
            />
          </div>
          <div className="input-group">
            <label>Select type:</label>
            <select 
              value={type} 
              onChange={(e) => setType(e.target.value)}
            >
              <option value="">- select type -</option>
              <option value="scooter">Scooter</option>
              <option value="cruiser">Cruiser</option>
              <option value="sport">Sport</option>
              <option value="touring">Touring</option>
              <option value="standard">Standard</option>
              <option value="dual-sport">Dual-Sport</option>
              {/* Add more motorbike types as necessary */}
            </select>
          </div>
          <div className="input-group">
            <label>Or enter efficiency (mpg US):</label>
            <input 
              type="number" 
              value={efficiency} 
              onChange={(e) => setEfficiency(e.target.value)} 
            />
          </div>
          
        </div>
      </div>
    );
  };
  
  export default Motorbike;
