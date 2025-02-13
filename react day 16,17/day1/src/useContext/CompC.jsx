// import React from "react"
// import { user } from "./CompA"
// import { id } from "./CompA"
// const CompC = () => {
//   return (
//     <div>
//     {
//         <user.Consumer>
        
//             {
//                 (name)=>{
//                     return(
//                         <>
//                             {
//                                 <id.Consumer>
//                                     {
//                                         (id)=>{
//                                             return(
//                                                 <>
//                                                 <h1> {name}</h1>
//                                                 <h1>{id}</h1>
//                                                 </>

//                                             )
//                                         }
//                                     }
//                                 </id.Consumer>
//                             }
//                         </>
//                     )
                    
//                 }
//             }
//         </user.Consumer>
//     }
//     </div>
//   )
// }

// export default CompC
import { useContext } from "react"
import { id, username } from "./CompA"
const CompC = () => {
    const name = useContext(username);
    const uid = useContext(id);
  return (
    <div>
      <h1>{name} {uid }</h1>
    </div>
  )
}

export default CompC
