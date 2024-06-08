import React from 'react';
import { useLocation } from 'react-router-dom';
import Bad from './Bad';
import Poor from './Poor';
import Average from './Average';
import Good from './Good';
import Excellent from './Excellent';
import './CategoryCard.css';
import { useAuth } from '../utils/AuthContext';
import Navbar from '../components/Navbar';

const RecomMain = () => {
  const { user } = useAuth();
  const location = useLocation();
  const prediction = location.state?.prediction || null;

  let categoryComponent;
  let categoryName;
  let categoryClass;

  if (prediction === null) {
    return <div>Loading...</div>;
  }

  if (prediction > 30) {
    categoryComponent = <Bad />;
    categoryName = "Bad";
    categoryClass = "bad";
  } else if (prediction >= 20) {
    categoryComponent = <Poor />;
    categoryName = "Poor";
    categoryClass = "poor";
  } else if (prediction >= 10) {
    categoryComponent = <Average />;
    categoryName = "Average";
    categoryClass = "average";
  } else if (prediction >= 5) {
    categoryComponent = <Good />;
    categoryName = "Good";
    categoryClass = "good";
  } else {
    categoryComponent = <Excellent />;
    categoryName = "Excellent";
    categoryClass = "excellent";
  }

  return (
    <>
      <Navbar />
      <div className="category-container">
        <h1>Carbon Footprint Categories</h1>
        <p className="prediction-value">Your predicted value: {prediction}</p>
        <div className={`category-name ${categoryClass}`}></div>

        <div className="category-component">
          {categoryComponent}
        </div>
      </div>
    </>
  );
};

export default RecomMain;