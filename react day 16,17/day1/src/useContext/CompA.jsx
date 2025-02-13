// import React from 'react'
// import CompB from "./CompB"
// export const user = React.createContext(); 
// export const id = React.createContext()
// const CompA = () => {
   
//   return (
//     <div>
//     <user.Provider value = "venkat" >
//         <id.Provider value={10}>
//             <CompB />
//         </id.Provider>
    
//     </user.Provider>
      

//     </div>
//   )
// }

// export default CompA
import React from 'react'
import CompB from './CompB'
export const username = React.createContext();
export const id = React.createContext();
const CompA = () => {
  return (
    <div>
    <username.Provider value={"Venkat"} >
    <id.Provider value={"10"} >
    <CompB />
    
    </id.Provider>
     
    </username.Provider>
    </div>
  )
}

export default CompA

