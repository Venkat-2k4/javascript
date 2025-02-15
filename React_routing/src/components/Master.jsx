import {Routes , Route} from "react-router-dom"
import Login from "./Login"
import Dashboard from "./Dashboard"
import Error from "./Error"
import Mobiles from "./mobiles"
import Laptops from "./laptops"
const Master = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={ <Dashboard />} >
          <Route path="mobiles" element={<Mobiles/>} />
          <Route path="laptops" element={<Laptops/>} />
        </Route>
        <Route  path="/error" element={<Error />} />\
        
      </Routes>
    </div>
  )
}

export default Master
