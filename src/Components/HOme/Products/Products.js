import React, { useEffect, useState } from 'react'
import proStyles from './pro..module.css'
import axios from 'axios'
// import { FaShuffle } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { cartSlice } from '../../Redux/cartSlice';
const Products = () => {
    const [things,setThings]=useState([])
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products`)
        .then(res =>setThings(res.data))
        .catch(err=>console.log(err))
    })
    const dispatch =useDispatch()
  return (
    
    <section className={proStyles.cont}>
    <h1>Exclusive Products</h1>
    <span></span>
    <div className={proStyles.products}>
    {
        things.map((el) => (
            <div className={proStyles.product} key={el.id} >
            <img  alt='' src={el.image}/>
            <div className={proStyles.text}>
                <h5>{el.title}</h5>
                <p>${el.price}</p>
                {/* <p>{el.category}</p> */}
                <button onClick={()=> dispatch(cartSlice.actions.addToCart(el))}>ADD TO CART</button>
            </div>
            </div>
        ))
    }
    </div>
    </section>
  )
}

export default Products
