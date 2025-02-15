import { useRef } from "react"
import { useNavigate } from "react-router-dom";

const Login = () => {
    const name = useRef();
    const password = useRef();
    const navigate = useNavigate()
    const handleSubmit=()=>{
        name.current.value === "admin" && password.current.value === "admin@123" ? navigate("/dashboard") : navigate("/error");
    }
       
  return (
    <div>
        <form> 
            Name: <input ref={name} type="text" name="" id="" />
            <br />
            password : <input ref={password} type="password"  />
            <br />
            <button type="submit" onClick={handleSubmit} >Submit</button>        
        </form> 
    </div>
  )
}

export default Login
