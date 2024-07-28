import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Navbar.css'
import {Link} from 'react-router-dom'
import { FaShoppingCart, FaBars  } from 'react-icons/fa';
import { SearchContext } from '../../context/SearchContext';
import Logo from '../../assets/logo.png'
import { CartItemContext } from '../../context/CartItemContext';



const Navbar = () => {

  const [searchInput, setSearchInput] = useState('');
  const { handleSearch } = useContext(SearchContext);
  const [category, setCategory] = useState('');
  const navigate = useNavigate(); // Use useNavigate hook
  const [isCartVisible, setIsCartVisible] = useState(false); // State to track cart visibility
  const { getTotalQuantity } = useContext(CartItemContext);

  
  
  const handleSearchChange = (e) =>{
    setSearchInput(e.target.value)
  }

  const handleSearchClick = () =>{
    handleSearch(searchInput)
    setSearchInput('')
    navigate('/search-results')
  }

  
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearchClick();
    }
  };



  // For category.........
  const handleCategory = (e) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);
    if (selectedCategory == 'All') {
      navigate(`/menu`)
    }
    else if (selectedCategory !== 'All') {
      navigate(`/category/${selectedCategory}`); // Use navigate function
    }
  };

  const handleCart = () =>{
    setIsCartVisible((prev) => !prev);
    if (!isCartVisible) {
      navigate('/cart');
    } else {
      navigate(-1); // Navigate back to the previous page
    }
  }

  
  return (
    <>
    <div className='navbar-container'>
        <Link to="/" className="logo"><img src={Logo} alt='logo'/></Link>

        <div className='nav-middle'>
          <ul className="navlist">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/menu">Our Menus</Link></li>
              <li><Link to="/about">About Us</Link></li>
              {/* <li><Link to="/review">Our Customer</Link></li> */}
          </ul>
          
          <div className='search-category'>
            <div className='search'>
              <input type='text' 
              placeholder='Search Items' 
              value={searchInput} 
              onChange={handleSearchChange}
              onKeyDown={handleKeyPress}
              />

              <button onClick={handleSearchClick}>Search</button>
            </div>

            <div className='category'>
              <h4>Category:</h4>
              <select value={category} onChange={handleCategory}>
                <option value='All'>All</option>
                <option value='Momo'>Momo</option>
                <option value='Pizza'>Pizza</option>
                <option value='Chowmin'>Chowmin</option>
                <option value='Burger'>Burger</option>
              </select>
            </div>
          </div>

        </div>

        <div className="nav-icons">
            <div href="" className='cart-icon' onClick={handleCart}>
              <i><FaShoppingCart/></i>
              <span className='total-quantity'>{getTotalQuantity()}</span>
            </div>
        </div>
    </div>

    </>
  )
}

export default Navbar