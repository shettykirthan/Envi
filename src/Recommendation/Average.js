import React from 'react';
import CategoryCard from './CategoryCard';

const Average = () => {
  const suggestions = [
    'Use energy-efficient lighting and turn off electronics when not in use.',
    'Consider walking or biking for short trips instead of driving.',
    'Increase your recycling efforts and compost organic waste.',
    'Be mindful of water usage and try to conserve water whenever possible.'
  ];

  const facts = 'Climate change can exacerbate existing health problems, such as asthma and allergies.';

  const credits = 'Reducing your carbon footprint can help improve public health.';

  return (
    <CategoryCard
      category="Average"
      suggestions={suggestions}
      facts={facts}
      credits={credits}
    />
  );
};

export default Average;
