import { Link, Outlet } from "react-router-dom"

const Dashboard = () => {
  return (
    <div>
      <h1> Dashboard sooon</h1>
      <Link to="mobiles" >Mobile</Link>
      <Link to="laptops" >Laptops </Link>

      <Outlet></Outlet>
    </div>
  )
}

export default Dashboard
