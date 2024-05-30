import React, { useState } from 'react';
import './componentscss.css'; // Make sure to import the CSS file

const House = () => {
  const [people, setPeople] = useState(1);
  const [electricity, setElectricity] = useState(1);
  const [naturalGas, setNaturalGas] = useState(2);
  const [heatingOil, setHeatingOil] = useState(2);
  const [coal, setCoal] = useState(2);
  const [lpg, setLpg] = useState(1);
  const [propane, setPropane] = useState(2);
  const [woodenPellets, setWoodenPellets] = useState(3);

  

  return (
    <div className="welcome-container">
      <h2>Household carbon footprint calculator</h2>
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
          <label>Electricity (kWh):</label>
          <input 
            type="number" 
            value={electricity} 
            onChange={(e) => setElectricity(e.target.value)} 
          />
        </div>
        <div className="input-group">
          <label>Natural gas (kWh):</label>
          <input 
            type="number" 
            value={naturalGas} 
            onChange={(e) => setNaturalGas(e.target.value)} 
          />
        </div>
        <div className="input-group">
          <label>Heating oil (US gallons):</label>
          <input 
            type="number" 
            value={heatingOil} 
            onChange={(e) => setHeatingOil(e.target.value)} 
          />
        </div>
        <div className="input-group">
          <label>Coal (kWh):</label>
          <input 
            type="number" 
            value={coal} 
            onChange={(e) => setCoal(e.target.value)} 
          />
        </div>
        <div className="input-group">
          <label>LPG (therms):</label>
          <input 
            type="number" 
            value={lpg} 
            onChange={(e) => setLpg(e.target.value)} 
          />
        </div>
        <div className="input-group">
          <label>Propane (US gallons):</label>
          <input 
            type="number" 
            value={propane} 
            onChange={(e) => setPropane(e.target.value)} 
          />
        </div>
        <div className="input-group">
          <label>Wooden pellets (metric tons):</label>
          <input 
            type="number" 
            value={woodenPellets} 
            onChange={(e) => setWoodenPellets(e.target.value)} 
          />
        </div>
        
      </div>
    </div>
  );
};

export default House;
