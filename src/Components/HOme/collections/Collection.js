import React from 'react'
import colStyles from './col.module.css'
import c1 from '../../../Imgs/col1.png'
import c2 from '../../../Imgs/col2.png'
const Collection = () => {
  return (
    <section className={colStyles.cont}>
        <div className={colStyles.col1}>
            <div className={colStyles.text}>
            <h2>New Season</h2>
            <h4>Sale 40% Off</h4>
            <button>Shop Now</button>
            </div>
            <img alt='' src={c1}/>
            
        </div>
        <div className={colStyles.col2}>
        <div className={colStyles.text}>
        <p>Super Sale</p>
        <h2>New Collection</h2>
        <button>Shop Now</button>
        </div>
        <img alt=''src={c2}/>
        
        </div>
    </section>
  )
}

export default Collection
