import React, {  useEffect,useState } from 'react'
import groundStyles from './back.module.css'
import b1 from'../../../Imgs/bg1.png'
import b2 from'../../../Imgs/bg2.png'
import b3 from'../../../Imgs/bg3 .png'
const Background = () => {
    
    const [count ,setCount]=useState(0)
    useEffect(()=>{
        setInterval(() => {
            setCount((count)=>{return count===2?0:count+1})
        },10000);
    },[])
  if(count === 0){

    return(
        <section className={groundStyles.Background} style={{backgroundColor:"#f4b770"}}>
            <img alt='' src={b1}/>
            <div className={groundStyles.text}>
                <p>Get up to 50% off Today Only!</p>
                <h2>Mens Cotton Jacket</h2>
                <p className={groundStyles.loream}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                <button>SHOP NOW</button>
                <div className={groundStyles.changer}>
                    <span onClick={()=>setCount(0)} ></span>
                    <span onClick={()=>setCount(1)}></span>
                    <span onClick={()=>setCount(2)}></span>
                </div>
            </div>
        </section>
    )
  } else if(count === 1){
    return(
        <section className={groundStyles.Background} style={{backgroundColor:"#a4b3c3"}}>
            <img alt='' src={b2}/>
            <div className={groundStyles.text}>
                <p>New Tranding</p>
                <h2>White Gold Plated Princess</h2>
                <p className={groundStyles.loream}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                <button>SHOP NOW</button>
                <div className={groundStyles.changer}>
                    <span onClick={()=>setCount(0)} className={count===0?"active":""} ></span>
                    <span onClick={()=>setCount(1)}></span>
                    <span onClick={()=>setCount(2)}></span>
                </div>
            </div>
            
        </section>
    )
  } else if(count === 2){
    return(
        <section className={groundStyles.Background} style={{backgroundColor:"#606a75"}}>
            <img alt='' src={b3}/>
            <div className={groundStyles.text} style={{color:"white"}}>
                <p>New Tranding</p>
                <h2>Samsung 49-Inch</h2>
                <p className={groundStyles.loream}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                <button>SHOP NOW</button>
                <div className={groundStyles.changer}>
                    <span onClick={()=>setCount(0)} className={count===0?"active":""} ></span>
                    <span onClick={()=>setCount(1)}></span>
                    <span onClick={()=>setCount(2)}></span>
                </div>
            </div>
            
        </section>
    )
  }
}

export default Background
