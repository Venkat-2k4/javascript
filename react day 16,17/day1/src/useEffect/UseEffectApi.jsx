//fetch api using useEffect hook

import { useEffect, useState } from "react"
import "./api.css"
const UseEffectApi = () => {
    const [item ,setItem] = useState([]);
    useEffect(()=>{
        window.fetch("https://fakestoreapi.com/products")
        .then((data)=>data.json())
        .then((res)=> setItem(res));
        
    } ,[])
    
  return (
    <div className="container">
      {
        item.map((it)=>{
            return(
                <div key={it.id} className="card">
                    <h1> product name {it.title}</h1>
                    <h2> price :{it.price}</h2>
                    <img className="card-image" src={it.image} alt={it.title} />
                </div>
            )
        })
      }
    </div>
  )
}

export default UseEffectApi
