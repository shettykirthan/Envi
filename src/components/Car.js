import React, { useState } from 'react';
import './componentscss.css'; // Make sure to import the CSS file

const Car = () => {
  const [mileage, setMileage] = useState('');
  const [year, setYear] = useState('');
  const [efficiency, setEfficiency] = useState('');
  const [fuelType, setFuelType] = useState('petrol');

  
  return (
    <div className="car-container">
      <h2>Car carbon footprint calculator</h2>
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
          <label>Choose vehicle:</label>
          <select 
            value={year} 
            onChange={(e) => setYear(e.target.value)}
          >
            <option value="">- select year of manufacture -</option>
            {/* Add year options as necessary */}
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            {/* Add more options here */}
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
        <div className="input-group">
          <label>Fuel type:</label>
          <select 
            value={fuelType} 
            onChange={(e) => setFuelType(e.target.value)}
          >
            <option value="petrol">Petrol</option>
            <option value="diesel">Diesel</option>
            <option value="electric">Electric</option>
            <option value="hybrid">Hybrid</option>
            {/* Add more fuel types here */}
          </select>
        </div>
        
      </div>
    </div>
  );
};

export default Car;
