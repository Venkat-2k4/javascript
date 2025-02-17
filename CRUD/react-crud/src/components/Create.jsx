import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Create = () => {
  const naviagteTo = useNavigate()
  const [user , setUser] = useState({
    name:"",
    id:0,
    role:""
  })
const handleChange = (e)=>{
    const {name,value} = e.target;
    setUser({...user,[name] : value})
  }
const handleSubmit=(e)=>{
  e.preventDefault();
  axios.post("http://localhost:8081/users",user)
  .then((res) => {
    console.log("user added", res.data)
    naviagteTo('/')
  })

  .catch((err) => console.log("error", err))

}
  

  return (
    <div>
      <form> 
        <label htmlFor="name"> Name</label>
        <input id="name" type="text" name="name" value={user.name}  placeholder="enter your name" onChange={handleChange} />

        <label htmlFor="id"> ID</label>
        <input id="id" type="number" name="id" value={user.id}  placeholder="enter your id" onChange={handleChange} />

        <label htmlFor="role"> Role</label>
        <input id="role" type="text" name="role" value={user.role}  placeholder="enter your role" onChange={ handleChange} />

        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default Create
