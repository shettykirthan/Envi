import React from 'react';
import CategoryCard from './CategoryCard';

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
    <CategoryCard
      category="Excellent"
      suggestions={suggestions}
      facts={facts}
      credits={credits}
    />
  );
};

export default Excellent;
