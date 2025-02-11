import React from "react"
import { user } from "./CompA"
import { id } from "./CompA"
const CompC = () => {
  return (
    <div>
    {
        <user.Consumer>
        
            {
                (name)=>{
                    return(
                        <>
                            {
                                <id.Consumer>
                                    {
                                        (id)=>{
                                            return(
                                                <>
                                                <h1> {name}</h1>
                                                <h1>{id}</h1>
                                                </>

                                            )
                                        }
                                    }
                                </id.Consumer>
                            }
                        </>
                    )
                    
                }
            }
        </user.Consumer>
    }
    </div>
  )
}

export default CompC
