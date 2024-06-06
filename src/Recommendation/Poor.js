import React from 'react';
import CategoryCard from './CategoryCard';

const Poor = () => {
  const suggestions = [
    'Use energy-efficient appliances and reduce energy waste.',
    'Consider carpooling or using public transport more frequently.',
    'Increase your recycling efforts and reduce single-use plastics.',
    'Opt for a more plant-based diet to reduce food-related emissions.'
  ];

  const facts = 'The World Health Organization estimates that climate change is already causing tens of thousands of deaths annually.';

  const credits = 'Efforts to reduce your carbon footprint can help mitigate these effects.';

  return (
    <CategoryCard
      category="Poor"
      suggestions={suggestions}
      facts={facts}
      credits={credits}
    />
  );
};

export default Poor;
