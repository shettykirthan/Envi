import React, { useState } from 'react';
import './componentscss.css'; // Make sure to import the CSS file

const Flight = () => {
  const [tripType, setTripType] = useState('Return');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [via, setVia] = useState('');
  const [flightClass, setFlightClass] = useState('Economy');
  const [trips, setTrips] = useState(1);
  const [radiativeForcing, setRadiativeForcing] = useState(false);

  return (
    <div className="flight-container">
      <h2>Flight carbon footprint calculator</h2>
      <div className="form-container">
        <div className="input-group">
          <label>Trip Type:</label>
          <select 
            value={tripType} 
            onChange={(e) => setTripType(e.target.value)}
          >
            <option value="Return">Return trip</option>
            <option value="One-way">One-way flight</option>
          </select>
        </div>
        <div className="input-group">
          <label>From:</label>
          <input 
            type="text" 
            value={from} 
            onChange={(e) => setFrom(e.target.value)} 
          />
        </div>
        <div className="input-group">
          <label>To:</label>
          <input 
            type="text" 
            value={to} 
            onChange={(e) => setTo(e.target.value)} 
          />
        </div>
        <div className="input-group">
          <label>Via (optional):</label>
          <input 
            type="text" 
            value={via} 
            onChange={(e) => setVia(e.target.value)} 
          />
        </div>
        <div className="input-group">
          <label>Class:</label>
          <select 
            value={flightClass} 
            onChange={(e) => setFlightClass(e.target.value)}
          >
            <option value="Economy">Economy class</option>
            <option value="Business">Business class</option>
            <option value="First">First class</option>
          </select>
        </div>
        <div className="input-group">
          <label>Trips:</label>
          <input 
            type="number" 
            value={trips} 
            onChange={(e) => setTrips(e.target.value)} 
          />
        </div>
        <div className="input-group">
          <label>
            <input 
              type="checkbox" 
              checked={radiativeForcing} 
              onChange={(e) => setRadiativeForcing(e.target.checked)} 
            />
            Click to include radiative forcing
          </label>
        </div>
        
      </div>
    </div>
  );
};

export default Flight;
