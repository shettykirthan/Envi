import React from 'react';

import './CategoryCard.css';

const CategoryCard = ({ category, suggestions, facts, credits }) => {
  return (
    <div className="category-card">
      <h2>{category}</h2>
      <h3>Suggestions:</h3>
      <ul>
        {suggestions.map((suggestion, index) => (
          <li key={index}>{suggestion}</li>
        ))}
      </ul>
      <h3>Frightening Facts:</h3>
      <p>{facts}</p>
      {credits && <p><strong>{credits}</strong></p>}
    </div>
  );
};

export default CategoryCard;
