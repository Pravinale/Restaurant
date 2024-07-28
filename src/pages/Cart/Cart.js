import React, { useContext} from 'react'
import './Cart.css'
import CartItem from '../CartItem/CartItem';
import { CartItemContext } from '../../context/CartItemContext';


const Cart = () => {

  const { cartItems} = useContext(CartItemContext);

  //Calculate Grand Total Price
  const getTotalPrice = () => cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  const GrandTotal = getTotalPrice();

  return (<>
    <div className='cart-container'>
      <div className='cart-content'>
        <div className='cart-head'>
          <h1>Your Foods</h1>
        </div>
        <div className='cart-body'>
          {cartItems.map(item => (
          <CartItem key={item.id} item={item}/>
        ))}
        </div>
        <div className='cart-footer'>
          <div className='grand-total'>
            <h1>Grand Total:</h1>
            <h3>Rs.{GrandTotal}</h3>
          </div>
          <div className='checkout'>
            <button className='checkout-btn'>Checkout Now</button>
          </div>
        </div>
      </div>
    </div>
  </>
    
  )
}

export default Cart