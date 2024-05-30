import React, { useState } from 'react';
import { Card, CardContent, Grid } from '@mui/material';
import Welcome from '../components/Welcome';
import House from '../components/House';
import Flight from '../components/Flight';
import Car from '../components/Car';
import Motorbike from '../components/Motorbike';
import Navbar from '../components/Navbar';
import Result from '../components/Result';

const User = () => {
  const [selectedComponent, setSelectedComponent] = useState('Welcome');

  const renderComponent = () => {
    switch (selectedComponent) {
      case 'Welcome':
        return <Welcome />;
      case 'House':
        return <House />;
      case 'Flight':
        return <Flight />;
      case 'Car':
        return <Car />;
      case 'Motorbike':
        return <Motorbike />;
      case 'Result':
        return <Result />;
      default:
        return <Welcome />;
    }
  };

  return (
    <div>
      <Navbar />
      <Grid container spacing={0} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'   }}>
        {['Welcome', 'House', 'Flight', 'Car', 'Motorbike' , 'Result'].map((component) => (
          <Grid item key={component} style={{ padding: '3px' }}>
            <Card 
              onClick={() => setSelectedComponent(component)} 
              style={{
                width: '100px', // Set the width of the button
                height: '75px', // Set the height of the button
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '12px', // Make the card edges rounded
                cursor: 'pointer',
                textAlign: 'center',
                backgroundColor: "#4CAF50"
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
    </div>
  );
};

export default User;
