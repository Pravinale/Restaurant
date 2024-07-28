import React from 'react';
import './Menu.css';
import Product from '../../product/Product.js';
import FOODDATA from '../../FOODDATA.js';

const groupByCategory = (products) => {
  return products.reduce((acc, product) => {
    const { category } = product;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(product);
    return acc;
  }, {});
};

const Menu = () => {
  const groupedProducts = groupByCategory(FOODDATA);

  return (
    <div className='menu-container'>
      <h1>Our Menus</h1>
      {Object.keys(groupedProducts).map((category) => (
        <div key={category} className='category-section'>
          <h2>{category}</h2>
          <div className='all-products'>
            {groupedProducts[category].map((product) => (
              <Product key={product.id} propsData={product} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
