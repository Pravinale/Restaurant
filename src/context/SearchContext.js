import React, { createContext, useState } from 'react';
import FOODDATA from '../FOODDATA'

export const SearchContext = createContext();

export const SearchProvider = ({ children }) =>{

    const [filteredProducts, setFilteredProducts] = useState(FOODDATA);

    const handleSearch = (input) =>{
        const searchFilter = FOODDATA.filter(product => product.title.toLowerCase().includes(input.toLowerCase()))
        setFilteredProducts(searchFilter)
    }



    return(
        <SearchContext.Provider value={{handleSearch, filteredProducts}}>
            {children}
        </SearchContext.Provider>
    )
}