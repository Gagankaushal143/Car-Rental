import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-4">
      <div>
        <Link to="/" >Rental</Link>
      </div>
      <div className="flex space-x-4">
        <Link to="/">Home</Link>
        <Link to="/cars">Cars</Link>
        <Link to="/about">About</Link>
      </div>

      <div className="flex space-x-4">
        <Link to= "/login">Login</Link>
        <Link to = "/register">Register</Link>
      </div>
    </nav>
  )
}
