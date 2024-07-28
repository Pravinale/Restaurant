import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Review from './pages/Review/Review';
import Menu from './pages/Menu/Menu';
import { SearchProvider } from './context/SearchContext';
import SearchResult from './pages/SearchResult/SearchResult';
import CategoryResult from './pages/CategoryResult/CategoryResult';
import Cart from './pages/Cart/Cart'
import { CartItemContextProvider } from './context/CartItemContext';

function App() {
  return (
    <>
    <CartItemContextProvider>
    <SearchProvider>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/review' element={<Review/>}/>
        <Route path='/search-results' element={<SearchResult/>}/>
        <Route path="/category/:category" element={<CategoryResult/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </BrowserRouter>
    </SearchProvider>  
    </CartItemContextProvider> 
    </>
  );
}

export default App;
