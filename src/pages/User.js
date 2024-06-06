import React, { useState } from 'react';
import { Card, CardContent, Grid, Button } from '@mui/material';
import Welcome from '../components/Welcome';
import House from '../components/House';
import Water from '../components/Water';
import Vehicle from '../components/Vehicle';
import Navbar from '../components/Navbar';
import Result from '../components/Result';

const User = () => {
  const components = ['Welcome', 'House', 'Vehicle', 'Water', 'Result'];
  const [selectedComponent, setSelectedComponent] = useState('Welcome');
  const [calculatedData, setCalculatedData] = useState({
    houseFootprint: null,
    waterFootprint: null,
    vehicleFootprint: null,
  });
  const [documentId, setDocumentId] = useState(null); // Store document ID
  const [isFormSubmitted, setIsFormSubmitted] = useState(false); // Track form submission status

  const renderComponent = () => {
    switch (selectedComponent) {
      case 'Welcome':
        return <Welcome setDocumentId={setDocumentId} setIsFormSubmitted={setIsFormSubmitted} />;
      case 'House':
        return <House setCalculatedData={setCalculatedData} documentId={documentId} />; // Pass documentId
      case 'Water':
        return <Water setCalculatedData={setCalculatedData} documentId={documentId} />;
      case 'Vehicle':
        return <Vehicle setCalculatedData={setCalculatedData} documentId={documentId} />; // Pass documentId
      case 'Result':
        return <Result calculatedData={calculatedData} documentId={documentId} />;
      default:
        return <Welcome />;
    }
  };

  const handleNext = () => {
    const currentIndex = components.indexOf(selectedComponent);
    const nextIndex = (currentIndex + 1) % components.length;
    setSelectedComponent(components[nextIndex]);
  };

  const handlePrevious = () => {
    const currentIndex = components.indexOf(selectedComponent);
    const prevIndex = (currentIndex - 1 + components.length) % components.length;
    setSelectedComponent(components[prevIndex]);
  };

  return (
    <>
      <Navbar />
      <div>
        <Grid container spacing={3} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {components.map((component) => (
            <Grid item key={component} style={{ padding: '9px', paddingBottom: '30px', paddingTop: '70px' }}>
              <Card
                onClick={() => isFormSubmitted && setSelectedComponent(component)} // Only allow navigation if form is submitted
                style={{
                  width: '100px',
                  height: '75px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: '12px',
                  cursor: isFormSubmitted ? 'pointer' : 'not-allowed', // Disable cursor if form is not submitted
                  textAlign: 'center',
                  backgroundColor: selectedComponent === component ? "#4CAF50" : "white",
                  border: selectedComponent === component ? "2px solid green" : "none",
                  opacity: isFormSubmitted ? 1 : 0.5 // Dim the component if form is not submitted
                }}
              >
                <CardContent>
                  <h3 style={{ fontSize: '15px', margin: 0 }}>{component}</h3>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <div className="user-input-section">
          {renderComponent()}
        </div>

        {isFormSubmitted && (
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', marginBottom: '40px' }}>
            {selectedComponent !== 'Welcome' && (
              <Button
                color="primary"
                onClick={handlePrevious}
                style={{ marginRight: '10px',marginRight:'90px', backgroundColor: 'green', borderRadius: '15px', width: '10%', padding: '10px', color: 'white' }}
              >
                Previous
              </Button>
            )}
            {selectedComponent !== 'Result' && ( // Only allow next if form is submitted
              <Button
                color="primary"
                onClick={handleNext}
                style={{ backgroundColor: 'green', borderRadius: '15px', width: '10%', padding: '10px', color: 'white' }}
              >
                Next
              </Button>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default User;
