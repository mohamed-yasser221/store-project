import React, { useState } from 'react'
import regStyle from '../Register/reg.module.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { cartSlice } from '../Redux/cartSlice'
const Register = () => {
    const [users ,setUsers]=useState({
        "email": ``,
          "password": ``,
    })
    const [loged,setLoged]=useState(false)
    const dispatch =useDispatch()
    const [er ,setEr]= useState(false)
    const navigate = useNavigate()
    const handellog =(e)=>{
        e.preventDefault();
        if(users.password === "" ||users.email === "" )
            {
                setEr(true)

        }else{
            setEr(false)
            axios.get(`http://localhost:5000/users`)
            .then((res )=>{
              // eslint-disable-next-line array-callback-return
              res.data.map( (el) => {
                if(users.email === el.email && users.password === el.password){
                          console.log("welcome")
                          dispatch(cartSlice.actions.log(el))
                          setLoged(true)
                }
              })
            })
            .catch(err => console.log(err))
            
        }
    }
return (
  <>
    {
      loged?<div className={regStyle.pg}>
      <div className={regStyle.sc}>
        <h1>Log Is Successfully</h1>
        <button onClick={()=> navigate("/home")}>Let's Start</button>
      </div>
    </div>:undefined
    }
    <section className={regStyle.cont}>
    <div className={regStyle.wag}>
    <h1> log In</h1>
                    <div className={regStyle.st}>
                        <Link to={"/home"}>Home</Link>
                        <>{'>'}</>
                        <p> LogIn</p>
                        
                    </div>
                    </div>
    <form onSubmit={(e)=> handellog(e)}>
    <h3>Log In To Website</h3>
    {
        er?<span className={regStyle.sp}>Fildes are required</span>: undefined
    }
        <input type='email' placeholder='Enter Your Email' value={users.email} 
        onChange={ e => setUsers({...users , email : e.target.value})}/>
        <input type='password' placeholder='Enter Password' value={users.password} 
        onChange={ e => setUsers({...users ,password : e.target.value})}/>
        <button>Log IN</button>
        <span></span>
        <p>I don't have an account? <Link to={"/signup"}> Sig Up</Link></p>
    </form>
    </section>
    </>
    )
}

export default Register
