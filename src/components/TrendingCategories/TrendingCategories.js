import React from "react";
import CategoryCard from "./CategoryCard";

const TrendingCategories = () => {
    const categories = [
      { number: 1, title: 'Action Games' },
      { number: 2, title: 'Sports Games' },
      { number: 3, title: 'Adventure Games' },
      { number: 4, title: 'Arcade Games' },
      { number: 5, title: 'Fantasy Game' },
      { number: 6, title: 'Strategy Game' },
      { number: 7, title: 'Shooter Games' },
      { number: 'All view', title: 'All Categories'}
    ];
  
    return (
      <div className="categories-section">
        <h2 className="trending-categories">Trending Categories</h2>
        <div className="trending-categories__container">
          {categories.map((category, index) => (
            <CategoryCard
              key={category.number}
              number={category.number}
              title={category.title}
            />
          ))}
        
        </div>
      </div>
    );
  };
  
export default TrendingCategories;