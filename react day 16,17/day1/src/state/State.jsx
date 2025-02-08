import React, { useState } from 'react'

const State = () => {
    // const [state ,setState] = useState("namasthe");
  const [user , setUser] = useState({
    name :"",
    password :""
  })

  const handleChange =  (e)=>{
        setUser( (prevUser)=>({
          ...prevUser,
          [e.target.name] :e.target.value
        })
   )
  }

    const handleSubmit =(e)=>{
      e.preventDefault();
      console.log(user.name , user.password)
      user.name === 'admin' && user.password === "12345" ?
      window.open("http://www.pixabay.com") : window.location.reload()
    }
  
  return (
    
    <div>
      <form>
        <label htmlFor='name'> Name:</label>
        <input type='text' name='name' id='name' value={user.name} onChange={handleChange} />
        <br/>
        <label htmlFor='password'> Password:</label>
        <input type='password' name='password' id='password' value={user.password} onChange={handleChange} />
        <br/>

        <button onClick={handleSubmit}>
            submit
        </button>
      </form>


      {/* <h1>{state}</h1>
      <button onClick={()=> setState("Greetings") }>Translate to english  </button> */}
    </div>
  )
}

export default State
