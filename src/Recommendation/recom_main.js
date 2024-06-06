import React from 'react';
import Bad from './Bad';
import Poor from './Poor';
import Average from './Average';
import Good from './Good';
import Excellent from './Excellent';
import './CategoryCard.css';




const recom_main = () => {
  const predicted_footprint = 5; // Example value, this should come from your logic

  let categoryComponent;

  if (predicted_footprint > 30) {
    categoryComponent = <Bad />;
  } else if (predicted_footprint >= 20) {
    categoryComponent = <Poor />;
  } else if (predicted_footprint >= 10) {
    categoryComponent = <Average />;
  } else if (predicted_footprint >= 5) {
    categoryComponent = <Good />;
  } else {
    categoryComponent = <Excellent />;
  }

  return (
    <div className="App">
      <h1>Carbon Footprint Categories</h1>
      <div className="category-container">
        {categoryComponent}
      </div>
    </div>
  );
};
export default recom_main;