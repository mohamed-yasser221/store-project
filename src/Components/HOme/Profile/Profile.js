import React, { useEffect, useState } from 'react'
import ProfStyles from './prof.module.css'
// import NavBar from '../../Nav/NavBar'
import { DotLoader } from 'react-spinners/ClipLoader'
const Profile = () => {
    const [load,setLoad]=useState(false)
    useEffect(()=>{
        setLoad(true)
        setTimeout(() => {
            setLoad(false)
        }, 5000);
        
    }, [])
  return (
    <>
    {/* {
        load? <DotLoader /> : <h1>hellloooooooo</h1>
    } */}
    </>
  )
}

export default Profile
