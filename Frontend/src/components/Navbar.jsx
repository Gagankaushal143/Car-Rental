import { Link , NavLink } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import RXLogo from "../assets/images/RentalXLogo.png";

export const Navbar = () => {

  const {token, user, logout} = useAuth();

  return (
    <nav className="flex items-center justify-between px-6 h-18 max-w-7xl rounded-3xl mx-auto bg-gray-900 text-white sticky top-0 z-999">
      <div>
        <Link to="/" className="font-semibold text-2xl flex items-center justify-center gap-2">
          <img src={RXLogo} alt="Logo" className="w-20"/>
          <h1 className="text-white/80 flex">
            Rental
            <p className="text-orange-500 font-bold">X</p>
          </h1>
        </Link>
      </div>
      <div className="space-x-8">
        <NavLink to="/" className={({isActive}) => `transition-colors text-lg duration-300 ${isActive ? "text-orange-400" : "text-white hover:text-orange-500"}`}>Home</NavLink>
        <NavLink to="/cars" className={({isActive}) => `transition-colors text-lg duration-300 ${isActive ? "text-orange-400" : "text-white hover:text-orange-500"}`}>Cars</NavLink>
        <NavLink to="/about" className={({isActive}) => `transition-colors text-lg duration-300 ${isActive ? "text-orange-400" : "text-white hover:text-orange-500"}`}>About</NavLink>
      </div>

      {!token ? (
        <div className="space-x-4">
        <Link to= "/login" className="border border-orange-500 text-orange-500 px-4 py-2 rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-300">Login</Link>
        <Link to = "/register" className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-all duration-300">Register</Link>
      </div>
      ) : (
        <div className="space-x-6">
          <NavLink to="/profile" className="text-lg hover:text-orange-500">Hi, {user?.firstName}</NavLink>

          <button onClick={logout} className="border-orange-500 border text-orange-500 px-4 py-2 rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-300 cursor-pointer">
            Logout
          </button>
        </div>
      )}
    </nav>
  )
}
