import React from 'react'
import conatctStyle from './contact.module.css'
import { Link } from 'react-router-dom'
import { CiMap } from "react-icons/ci";
import { IoMailOpenOutline } from "react-icons/io5";
import { IoIosPhonePortrait } from "react-icons/io";
const Contact = () => {
  return (
    <>
    
    <section className={conatctStyle.contact}>
    <div className={conatctStyle.wag}>
    <h1> contact</h1>
                    <div className={conatctStyle.st}>
                        <Link to={"/home"}>Home</Link>
                        <>{'>'}</>
                        <p> Contact Us</p>
                        
                    </div>
                    </div>
        <div className={conatctStyle.carts}>
        <div className={conatctStyle.cart}>
            <span>
            <div className={conatctStyle.dot}></div>
                <CiMap className={conatctStyle.sora} size={30} color='#ff344e' />
            </span>
            <h3>Address</h3>
            <p>123 Street, Old Trafford, London, UK</p>
        </div>            
        <div className={conatctStyle.cart}>
            <span>
            <div className={conatctStyle.dot}></div>
                <IoMailOpenOutline className={conatctStyle.sora} size={30} color='#ff344e' />
            </span>
            <h3>Email Address</h3>
            <p>ammar@gmail.com</p>
        </div>            
        <div className={conatctStyle.cart}>
            <span>
            <div className={conatctStyle.dot}></div>
                <IoIosPhonePortrait className={conatctStyle.sora} size={30} color='#ff344e' />
            </span>
            <h3>Phone</h3>
            <p>+ 457 789 789 65</p>
        </div> 
        </div>           
    </section>
    </>
  )
}

export default Contact
