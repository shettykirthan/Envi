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

  const renderComponent = () => {
    switch (selectedComponent) {
      case 'Welcome':
        return <Welcome />;
      case 'House':
        return <House setCalculatedData={setCalculatedData} setDocumentId={setDocumentId} />; // Pass setDocumentId
      case 'Water':
        return <Water setCalculatedData={setCalculatedData} documentId={documentId}/>;
      case 'Vehicle':
        return <Vehicle setCalculatedData={setCalculatedData} documentId={documentId} />; // Pass documentId
      case 'Result':
        return <Result calculatedData={calculatedData} />;
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
        <Grid container spacing={0} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {components.map((component) => (
            <Grid item key={component} style={{ padding: '3px' }}>
              <Card
                onClick={() => setSelectedComponent(component)}
                style={{
                  width: '100px',
                  height: '75px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  textAlign: 'center',
                  backgroundColor: selectedComponent === component ? "#4CAF50" : "white",
                  border: selectedComponent === component ? "2px solid green" : "none", // Optional: Add a green border to the selected component
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
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          {selectedComponent !== 'Welcome' && (
            <Button color="primary" onClick={handlePrevious} style={{ marginRight: '10px' }}>
              Previous
            </Button>
          )}
          {selectedComponent !== 'Result' && (
            <Button color="primary" onClick={handleNext}>
              Next
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default User;
