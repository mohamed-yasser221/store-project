import React from 'react'
import featStyle from './fets.module.css'
import { FaTruckArrowRight } from "react-icons/fa6";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { MdOutlineSupportAgent } from "react-icons/md";
import { RiSecurePaymentFill } from "react-icons/ri";

const Features = () => {
  return (
    <section className={featStyle.features}>
    <div className={featStyle.sec}>
            <FaTruckArrowRight size={30} color='#ff344e' />
            <div className={featStyle.text}>
            <h5>Free Delivery</h5>
            <p>Worldwide</p>
            </div>
    </div>
    <div className={featStyle.sec}>
            <FaMoneyBillTransfer  size={30} color='#ff344e' />
            <div className={featStyle.text}>
            <h5>Money Returns</h5>
            <p>30 Days money return</p>
            </div>
    </div>
    <div className={featStyle.sec}>
            <MdOutlineSupportAgent size={30} color='#ff344e'/>
            <div className={featStyle.text}>
            <h5>27/4 Online Support</h5>
            <p>Customer Support</p>
            </div>
    </div>
    <div className={featStyle.sec}>
            <RiSecurePaymentFill size={30} color='#ff344e' />
            <div className={featStyle.text}>
            <h5>Payment Security</h5>
            <p>Safe Payment</p>
            </div>
    </div>
    </section>
  )
}

export default Features
