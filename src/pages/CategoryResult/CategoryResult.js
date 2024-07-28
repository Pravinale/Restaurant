import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './CategoryResult.css'
import Product from '../../product/Product'
import FOODDATA from '../../FOODDATA'

const CategoryResult = () => {

  const { category } = useParams(); // Use useParams to get the category from the URL
  const [categoryProducts, setCategoryProducts] = useState([]);

  useEffect(() => {
    // Filter products based on category
    const categoryFilter = FOODDATA.filter(product => product.category.toLowerCase() === category.toLowerCase());
    setCategoryProducts(categoryFilter);
    // setFilteredByPrice(filtered); // Initialize filteredByPrice
  }, [category ]);

  return (
    <div className="category-result-container">
    <h1>{category}</h1>
    <div className="category-products">
      {categoryProducts.length > 0 ? (
        categoryProducts.map(product => (
          <Product key={product.id} propsData={product} />
        ))
      ) : (
        <div>No products found in this category.</div>
      )}
    </div>
  </div>
  )
}

export default CategoryResult