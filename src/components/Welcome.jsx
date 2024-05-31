import React, { useState } from 'react';
import "./componentscss.css"; // Import your CSS file for styling

const Welcome = () => {
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

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
        <p>Carbon footprint calculations are typically based on annual emissions from the previous 12 months</p>
        <p>Enter the period this calculation covers (optional):</p>
        <div className="input-group">
          <label htmlFor="fromDate">From:</label>
          <input 
            type="date" 
            id="fromDate" 
            value={fromDate} 
            onChange={(e) => setFromDate(e.target.value)} 
          />
        </div>
        <div className="input-group">
          <label htmlFor="toDate">To:</label>
          <input 
            type="date" 
            id="toDate" 
            value={toDate} 
            onChange={(e) => setToDate(e.target.value)} 
          />
        </div>
        <p>Next, select the appropriate tab above to calculate the part of your lifestyle you are most interested in, e.g. your flights.</p>
        <p>Or, visit each of the tabs above to calculate your full carbon footprint.</p>
        <p>Following your calculation, you can offset / neutralise your emissions through one of our climate-friendly projects.</p>
      </div>
    </div>
  );
};

export default Welcome;
