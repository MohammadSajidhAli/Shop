import React from 'react';
import categories from '../data';
import '../styles/amazon.css';
import Cards from './Cards';

const Amazon = ({ handleClick, selectedCategory }) => {
  const filteredCategories = selectedCategory === 'All' 
    ? categories 
    : categories.filter(category => category.category_name === selectedCategory);

  return (
    <section className="category-container">
      {filteredCategories.map((category) => (
        <div key={category.category_name} className="category-section">
          <h2>{category.category_name}'s Collection</h2>
          <div className="category-items">
            {category.category_products.map((item) => (
              <Cards item={item} key={item.id} handleClick={handleClick} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Amazon;
