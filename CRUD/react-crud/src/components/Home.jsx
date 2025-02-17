import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const Home = () => {
const [user , setUser] = useState([])
const navigateTo = useNavigate()
  useEffect(()=>{ 
    const fetchUsers = async ()=>{
      const res = await axios.get("http://localhost:8081/users")
      setUser(res.data)      
     }
    fetchUsers()
   } , [])

   
    
  

  return (
    <div>
      <Link to='/create'>Create</Link>

      <div>
         {
          user.map((user)=>{
            return(
              <div key={user.id} className="user" >
                <h1>{user.name}</h1>
                <h1>{user.id}</h1>
                <h1>{user.role}</h1>
                <Link to={`/edit/${user.id}`} > Edit  </Link>
                <button onClick={()=> {
                  axios.delete(`http://localhost:8081/users/${user.id}`)
                  .then(()=> console.log("deleted user"))
                  window.location.reload()
                  }}>Delete</button>
              </div>
            )
          }) 
         }
         
      </div>
    </div>
  )
}

export default Home
