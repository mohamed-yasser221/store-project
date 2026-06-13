import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import sora from '../../Imgs/logo.png'
import './nav.css'
import { GoSearch } from "react-icons/go";
import { BsCart3 } from "react-icons/bs";
import { RiMenuLine } from "react-icons/ri";
import { RiCloseLargeLine } from "react-icons/ri";
import { TbSquareRoundedArrowUpFilled } from "react-icons/tb";
import { useDispatch, useSelector } from 'react-redux';
import { FaRegUserCircle } from "react-icons/fa";
import { cartSlice } from '../Redux/cartSlice';

const NavBar = () => {
  const crtnum =useSelector(x => x.cart.cart)
  const users =useSelector(x=> x.cart)
  const[size,setSize]=useState(false)
  const [big,setbig]=useState(false)
  const [close,setClose]=useState(true)
  const[scro,setScro]=useState(false)
  const dispatch = useDispatch()
  useEffect(()=>{
    window.addEventListener("resize",()=>{
      let size =window.innerWidth
      size<=950?setSize(true):setSize(false)

    })
    window.addEventListener("scroll",()=>{
      let scr=window.scrollY
      scr>=350?setScro(true):setScro(false)
    })
  })
  console.log(users.users.active)
  const change= () =>{
    setbig(!big)
    setClose(!close)
  }
  return (
    <header style={scro?{backgroundColor:"rgba(255, 255, 255, 0.806)",borderBottom:"#3f424482 1px solid"}:undefined}>
    {
      scro?<TbSquareRoundedArrowUpFilled onClick={()=> window.scrollTo({top:0,behavior:"smooth"})}
      className="arrow"  size={30}/>:undefined
    }
    
    <nav>
        <Link to={'/'}><img alt='' src={sora}/></Link>
        <ul className={big? "bigMenu":undefined} style={size?{display:"none"}:undefined}>
            <li><NavLink to={'/home'} className={window.location.pathname === '/' ||'/home'?"active":undefined}>HOME</NavLink></li>
            <li><NavLink to={'/product'}>PRODUCT</NavLink></li>
            <li><NavLink to={'/shop'}>SHOP</NavLink></li>
            <li><NavLink to={'/contact'}>CONTACT US</NavLink></li>
            {
              users.users.active?<><li><Link to={'/profile'}><FaRegUserCircle className='rd'
            size={20}  /></Link></li>
            <li><NavLink className='out' onClick={()=> dispatch(cartSlice.actions.out())} color='#2b2d2e'>LOG Out</NavLink></li></>

            :(<>
            <li><NavLink to={'/login'}>LOG IN</NavLink></li></>)
            }

            
        </ul>
        <div className='icons'>
                <GoSearch className='rd' size={20} color='#2b2d2e' />
                <div className='shop'>
                <span>{
                  crtnum.length
                }</span>
                <Link to={"/cart"} ><BsCart3 className='rd'
                  size={20} color='#2b2d2e' /></Link>
                </div>
                {
                  size? close?(<RiMenuLine onClick={()=> change()} className='mn' size={20} color='#2b2d2e'/>): <RiCloseLargeLine onClick={()=> change()} className='mn' size={20} color='#2b2d2e'  />:
                  big ? <RiCloseLargeLine onClick={()=> change()} className='mn' size={20} color='#2b2d2e' />:undefined
                }
                
        </div>
    </nav>
    </header>
  )
}

export default NavBar
