// import { useEffect, useState } from "react"

// // no dependencies
// const UseEffect = () => {
//     // const [count, setCount] = useState(0);
//     useEffect(()=>{
//         console.log("useEffect")
//         setTimeout(()=>{
//             return  () => {
//                 console.log("useEffect");
//             }
            
            
//             // setCount(count+1);
//             // console.log(count)
//         },2000)
//     } )
//   return (
//     <div>
//         <h1>UseEffect</h1>
//         {/* <h2>{count}</h2> */}
//     </div>
//   )
// }
// export default UseEffect


// import React, { useEffect, useState } from 'react'

// const UseEffect = () => {
//     const [count, setCount] = useState(0);
//     useEffect(()=>{
//         setTimeout(()=>{
//             console.log(count);
//             setCount(count+1);
//         },2000)
//     },[])
//   return (
//     <div>
//       <h1>UseEffect</h1>
//       <h1>{count}</h1>
//     </div>
//   )
// }

// export default UseEffect





// dependencies with values
import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [count, setCount] = useState(0);
    const [inc,setInc] = useState(0)
    useEffect(()=>{
        setInc(()=> count*2 )
    },[count])
  return (
    <div>
      {count}
      <button onClick={()=> setCount((e)=> e+1 )}>CLICK</button>
      {inc}
    </div>
  )
}

export default UseEffect
