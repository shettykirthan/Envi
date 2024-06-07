import React from 'react';
import './suggestions.css';

const Bad = () => {
  const suggestions = (
    <ul>
      <li>Switch to renewable energy sources for your home.</li>
      <li>Reduce car usage by opting for public transportation or carpooling.</li>
      <li>Implement energy-efficient practices like using LED lights and smart thermostats.</li>
      <li>Reduce meat consumption and adopt a more plant-based diet.</li>
      <li>Minimize air travel and consider carbon offset programs.</li>
    </ul>
  );

  const facts = 'Did you know that the average American emits about 20 tons of carbon dioxide per year?';
  const credits = 'People with lower carbon footprints contribute to a healthier environment for all.';

  return (
    <React.Fragment>
      <div className='suggestion_card'>
        
        <div className='suggestion_bad'>Bad</div>
        <h1 className='h1tag'>Recommendations</h1>
        <div className='suggestions'>{suggestions}</div>
        <div className='facts_and_credits'>
          <center><h1 className='h1tag'>Intresting facts:</h1>
          <div className='facts'> {facts}</div>
          <h1 className='h1tag'>Credits:</h1>
          <div className='credits'>{credits}</div></center>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Bad;
