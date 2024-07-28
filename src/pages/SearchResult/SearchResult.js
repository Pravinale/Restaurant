import React, { useContext } from 'react'
import './SearchResult.css'
import Product from '../../product/Product'
import { SearchContext } from '../../context/SearchContext';

const SearchResult = () => {

  const { filteredProducts } = useContext(SearchContext);

  return (
    <div className='search-result-container'>
      <div className='search-results'>
        {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Product key={product.id} propsData={product} />
            ))
          ) : (
            <div className='no-product'>No products found</div>
          )}
      </div>

    </div>
  )
}

export default SearchResult