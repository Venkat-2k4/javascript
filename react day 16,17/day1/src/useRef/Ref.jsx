import React, { useRef } from 'react'

const Ref = () => {
    const name= useRef();
    const password = useRef()
     
    const handleClick=(e)=>{
        e.preventDefault();
        console.log(name.current.value);
        console.log(password.current.value);

    }
    // const demo = useRef()
    // const h2 = useRef()
    // // console.log(demo)
    // // console.log(demo.current)
    // // demo.current.style.color = 'red'

    // const handleChange=()=>{
        
    //     const color = Math.floor(Math.random()*16777215).toString(16);
    //     h2.current.style.backgroundColor = `#${color}`
        

    // }
  return ( 
    <div>
      {/* <h1 ref={demo} > konnichiwa minasan </h1>
      <h1 ref={h2} onClick={handleChange}>click on me to change the color</h1> */}
      <form>
        <label htmlFor='name'  > name:</label>
        <input type='text' id='name' name='name' ref={name}/>
        <label htmlFor='password'  > PAssword:</label>
        <input type='password' id='password' name='password'ref={password} />
        <button onClick={handleClick} >Submit</button>
      </form>
    </div>
  )
}

export default Ref
