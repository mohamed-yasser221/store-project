import React, { useState } from 'react'
import regStyle from './reg.module.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
const Register = () => {
    const [users ,setUsers]=useState({
        "email": ``,
          "username": ``,
          "password": ``,
          "phone": ``,
          "street": ``
    })
    const navigate = useNavigate()
    const [pg,setPg]=useState(false)
    const [er ,setEr]= useState(false)
    const [cp,setCp]=useState(``)
    const [ps ,setps]=useState(false)
    const handelReg =(e)=>{
        e.preventDefault();
        if(users.username === "" ||
            users.password === "" ||
            users.email === "" || 
            users.street=== "" || 
            users.phone=== "")
            {
                setEr(true)

        }else{
            setEr(false)
            if(users.password !== cp){
                setps(true)
            }else{
                setps(false)
                axios.post(`http://localhost:5000/users`, users)
                .then(res => console.log(res))
                .catch(err => console.log(err))
                setPg(true)
            }
        }
    }
return (
    <>
    {
        pg?<div className={regStyle.pg}>
      <div className={regStyle.sc}>
        <h1>sign Is Successfully</h1>
        <button onClick={()=> navigate("/login")}>Log in NOW</button>
      </div>
    </div>:undefined
    }
    <section className={regStyle.cont}>
    <div className={regStyle.wag}>
    <h1> Sign Up</h1>
                    <div className={regStyle.st}>
                        <Link to={"/home"}>Home</Link>
                        <>{'>'}</>
                        <p> SigUp</p>
                        
                    </div>
                    </div>
    <form onSubmit={(e)=> handelReg(e)}>
    
    <h3>Create an Account</h3>
    {
        er?<span className={regStyle.sp}>Fildes are required</span>: undefined
    }
        <input type='text' placeholder='Enter Your Username' value={users.username} 
        onChange={ e => setUsers({...users , username : e.target.value})}/>
        <input type='email' placeholder='Enter Your Email' value={users.email} 
        onChange={ e => setUsers({...users , email : e.target.value})}/>
        {
            ps?<span  className={regStyle.sp}> passwords not match</span>:undefined
        }
        <input type='password' placeholder='Enter Password' value={users.password} 
        onChange={ e => setUsers({...users ,password : e.target.value})}/>
        <input type='password' placeholder='Confirm Password' value={cp} onChange={e=> setCp(e.target.value)}/>
        <input type='text' placeholder='Enter Address' value={users.street} 
        onChange={ e => setUsers({...users ,street : e.target.value})}/>
        <input type='phone' placeholder='Enter Phone' value={users.phone} 
        onChange={ e => setUsers({...users ,phone : e.target.value})}/>
        <button>SIGN UP</button>
        <span></span>
        <p>Already have an account? <Link to={"/login"}> Log in</Link></p>
    </form>
    </section>
    </>
    )
}

export default Register
