import React from 'react'
import CFC from './CFC'

const PFC = () => {
    const fun = ()=>{
        window.alert("HOOOOOOOOOOOYEEEEEEAHHHHHHHH")
    }
    const arr = [1,2,3,4]
    const obj = {
        username: "venkat",
        id:1,
        age:"21"

    }
  return (
    <div>
      <CFC user= "Venkat" dob="06/16/2004" mail="Email" arr={arr} obj={obj} fun = {fun}/>
      
    </div>
  )
}

export default PFC
