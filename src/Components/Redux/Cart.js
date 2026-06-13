import React from 'react'
import cartStyle from './cart.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { cartSlice } from './cartSlice'
const Cart = () => {
    const cproducts =useSelector( x =>x.cart.cart)
    const dispatch =useDispatch()
  return (
    <section className={cartStyle.cont}>
    <h2>Cart Items</h2>
    <span></span>
    <div className={cartStyle.carts}>
      {
        cproducts.map((el, idx) => (
            
            <div key={el.id} className={cartStyle.cart}>
            <img  alt='' src={el.image}/>
            <div className={cartStyle.text}>
                <h5>{el.title}</h5>
                <p>${el.price}</p>
                <button onClick={()=> dispatch(cartSlice.actions.removeFromCart(idx))}> Remove From Cart</button>
                </div>
                
            </div>
            
        ))
      }
      </div>
    </section>
  )
}

export default Cart
