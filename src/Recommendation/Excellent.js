import React from 'react';
import CategoryCard from './CategoryCard';
import './suggestions.css';


const Excellent = () => {
  const suggestions = [
    'Continue your sustainable practices and explore new ones.',
    'Educate others about the importance of reducing their carbon footprint.',
    'Participate in community initiatives focused on sustainability.',
    'Advocate for policies that promote environmental conservation.'
  ];

  const facts = 'The Amazon rainforest, often referred to as the "lungs of the Earth," produces 20% of the world\'s oxygen.';

  const credits = 'Fantastic job! You are a role model for sustainable living.';

  return (
    <React.Fragment>
    <div className='suggestion_card'>
  
   <div className='suggestion_excellent' >
      Bad
      </div>
    <div className='suggestions'>
      suggestions={suggestions}
      </div>
      <div className='facts_and_credits'>
      facts={facts}
      credits={credits}
      </div>
    </div>
    </React.Fragment>
  );
};

export default Excellent;
