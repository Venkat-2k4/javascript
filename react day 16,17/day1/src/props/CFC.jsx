import React from 'react'

const CFC = ({user,dob, arr , obj , fun}) => {
    console.log(obj);
    const {username , id} = obj
  return (
    <div>
        <h1>{user}</h1>
        <h2>{dob}</h2>
        <h3>{arr}</h3>
        <h1>username :  {username}</h1>
        <h2>user id: {id}</h2>
        <button onClick={()=>{fun()}}>CLICK ME</button>


    
    </div>
    )
}

export default CFC
