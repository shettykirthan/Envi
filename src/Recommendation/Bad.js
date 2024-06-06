import React from 'react';
import CategoryCard from './CategoryCard';

const Bad = () => {
  const suggestions = [
    'Switch to renewable energy sources for your home.',
    'Reduce car usage by opting for public transportation or carpooling.',
    'Implement energy-efficient practices like using LED lights and smart thermostats.',
    'Reduce meat consumption and adopt a more plant-based diet.',
    'Minimize air travel and consider carbon offset programs.'
  ];

  const facts = 'Did you know that the average American emits about 20 tons of carbon dioxide per year?';

  const credits = 'People with lower carbon footprints contribute to a healthier environment for all.';

  return (
    <CategoryCard
      category="Bad"
      suggestions={suggestions}
      facts={facts}
      credits={credits}
    />
  );
};

export default Bad;
