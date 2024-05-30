import React from 'react';
import { useNavigate } from 'react-router-dom';
import './componentscss.css'; // Make sure to import the CSS file

const Result = () => {
  const houseFootprint = 0.19;
  const flightsFootprint = 0.00;
  const carFootprint = 0.00;
  const motorbikeFootprint = 0.00;
  const totalFootprint = houseFootprint + flightsFootprint + carFootprint + motorbikeFootprint;
  const navigate = useNavigate();

  const handleGoToDashboard = () => {
    navigate('/userdashboard');
  };

  return (
    <div className="result-container">
      <h2>Your Carbon Footprint:</h2>
      <div className="footprint-item">
        <span>House:</span> <span>{houseFootprint} metric tons of CO2e</span>
      </div>
      <div className="footprint-item">
        <span>Flights:</span> <span>{flightsFootprint} metric tons of CO2e</span>
      </div>
      <div className="footprint-item">
        <span>Car:</span> <span>{carFootprint} metric tons of CO2e</span>
      </div>
      <div className="footprint-item">
        <span>Motorbike:</span> <span>{motorbikeFootprint} metric tons of CO2e</span>
      </div>
      <div className="footprint-total">
        <span>Total:</span> <span>{totalFootprint} metric tons of CO2e</span>
      </div>
      <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "30vh"}}>
  <button style={{width: "300px", color:"black"}} onClick={handleGoToDashboard}>
    Go to Dashboard
  </button>
</div>

    </div>
  );
};

export default Result;
