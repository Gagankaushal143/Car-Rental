import { Link , NavLink } from "react-router-dom"

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 h-18 max-w-7xl rounded-3xl mx-auto bg-gray-900 text-white sticky top-0 backdrop-blur-lg">
      <div>
        <Link to="/" className="text-orange-500 font-bold text-2xl">🚗 RentalX</Link>
      </div>
      <div className="space-x-8">
        <NavLink to="/" className={({isActive}) => `transition-colors duration-300 ${isActive ? "text-orange-400" : "text-white hover:text-orange-500"}`}>Home</NavLink>
        <NavLink to="/cars" className={({isActive}) => `transition-colors duration-300 ${isActive ? "text-orange-400" : "text-white hover:text-orange-500"}`}>Cars</NavLink>
        <NavLink to="/about" className={({isActive}) => `transition-colors duration-300 ${isActive ? "text-orange-400" : "text-white hover:text-orange-500"}`}>About</NavLink>
      </div>

      <div className="space-x-4">
        <Link to= "/login" className="border border-orange-500 text-orange-500 px-4 py-2 rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-300">Login</Link>
        <Link to = "/register" className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-all duration-300">Register</Link>
      </div>
    </nav>
  )
}
