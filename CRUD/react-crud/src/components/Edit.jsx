import axios from "axios";
import { useEffect ,useState} from "react";
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom";

const Edit = () => {
  const navigateTo = useNavigate()
  const {id} = useParams();
  console.log(id)
    const [user , setUser] = useState({
      name:"",
      id:0,
      role:""
    })
  const handleChange = (e)=>{
      const {name,value} = e.target;
      setUser({...user,[name] : value})
    }

    const handleSubmit = () =>{
      axios.put(`http://localhost:8081/users/${id}` ,user )
      .then(()=>console.log("update Successfull"))
      navigateTo(`/`)
    }


 

useEffect(()=>{axios.get(`http://localhost:8081/users/${id}`)
  .then((res) =>setUser({...user,...res.data}))
  console.log(user)
   
},[id])

  

  return (
    <div>
      <form>
        <label htmlFor="name"> Name</label>
        <input id="name" value={user.name} type="text" name="name" placeholder="enter your name" onChange={handleChange} />

        <label htmlFor="id"> ID</label>
        <input id="id" type="number" value={user.id} name="id" placeholder="enter your id" onChange={handleChange}/>

        <label htmlFor="role"> Role</label>
        <input id="role" type="text" value={user.role} name="role" placeholder="enter your role" onChange={handleChange} />

        <button onClick={handleSubmit} type="submit">Edit</button>
      </form>
    </div>
  )
}

export default Edit
