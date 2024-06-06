import React from 'react';
import CategoryCard from './CategoryCard';

const Good = () => {
  const suggestions = [
    'Continue using energy-efficient appliances and renewable energy sources.',
    'Support sustainable and local businesses.',
    'Encourage others to adopt eco-friendly practices.',
    'Consider investing in a home energy audit to further reduce consumption.'
  ];

  const facts = 'According to NASA, the Arctic ice is shrinking at a rate of 13.2% per decade, which accelerates global warming.';

  const credits = 'Your efforts are crucial in slowing down climate change.';

  return (
    <CategoryCard
      category="Good"
      suggestions={suggestions}
      facts={facts}
      credits={credits}
    />
  );
};

export default Good;
