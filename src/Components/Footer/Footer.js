import React from 'react'
import fotStyles from './fot.module.css'
import { IoLocation } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGooglePlus } from "react-icons/fa";
import { SiYoutubemusic } from "react-icons/si";
import { FaInstagramSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';
import v1 from '../../Imgs/amarican_express.png'
import v2 from '../../Imgs/master_card.png'
import v3 from '../../Imgs/visa.png'
import v4 from '../../Imgs/discover.png'
const Footer = () => {
  return (
    <section className={fotStyles.footer}>
      <div className={fotStyles.top}>
      <div className={fotStyles.cont}>
        <h4>Contact info</h4>
        <div className={fotStyles.icon}>
        <IoLocation  color='white' />
        <p>123 Street, Old Trafford, NewYork, USA</p>
        </div>
        <div className={fotStyles.icon}>
            <CiMail color='white'/>
            <p>info@sitename.com</p>
        </div>
        <div className={fotStyles.icon}>
            <MdOutlinePhoneAndroid color='white' />
            <p> +20 1094888107</p>
        </div>
        <div className={fotStyles.social}>
            <FaFacebook color='#3b5998' size={30} cursor={"pointer"} />
            <FaSquareXTwitter color='#454444'  size={30} cursor={"pointer"}/>
            <FaGooglePlus  color='#dd4b39' size={30} cursor={"pointer"}/>
            <SiYoutubemusic color='#c4302b' size={30} cursor={"pointer"} />
            <FaInstagramSquare  color='#67879b' size={30} cursor={"pointer"} />


        </div>
      </div>
      <div className={fotStyles.link}>
        <h4>Useful Links</h4>
        <Link to={"/"}>About us</Link>
        <Link to={"/"}>FAQ</Link>
        <Link to={"/"}>Location</Link>
        <Link to={"/"}>Contact</Link>
        <Link to={"/"}>Feed</Link>
      </div>
      <div className={fotStyles.acc}>
        <h3>My Account</h3>
        <Link to={"/"}>My Account</Link>
        <Link to={"/"}>Disscount</Link>
        <Link to={"/"}>Returns</Link>
        <Link to={"/"}>History</Link>
        <Link to={"/"}>Else</Link>
      </div>
      <div className={fotStyles.sub}>
        <h4>Subscribe Our Newsletter</h4>
        <p>If you want to get an email from us every time we have a new special offer, then sign up here!</p>
        <input type='text' placeholder='Enter Email Address'></input>
      </div>

      </div>
      <span></span>
      <div className={fotStyles.bottom}>
            <p>© 2024 All Rights Reserved by AmmarAhmedEldeeb</p>
            <div className={fotStyles.sowar}>
            <img alt='' src={v1}/>
            <img alt='' src={v2}/>
            <img alt='' src={v3}/>
            <img alt='' src={v4}/>

            </div>
      </div>
    </section>
  )
}

export default Footer
