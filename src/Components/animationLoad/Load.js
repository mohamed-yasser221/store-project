import React, { useState } from 'react'

const Load = () => {
    const [load,setLoad]=useState(true)
        setTimeout(function(){
            <>
            setLoad(false)
            
<div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
</>
        },3000)
  return (
    <div>
      {
        load?<div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        :undefined
      }
    </div>
  )
}

    setTimeout(function(){
<div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>

        },3000)
export default Load
