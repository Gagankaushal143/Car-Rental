import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 h-16 max-w-7xl rounded-2xl mx-auto bg-gray-900 text-white mt-1 sticky">
      <div>
        <Link to="/" className="text-orange-500 font-bold text-2xl">🚗 RentalX</Link>
      </div>
      <div className="space-x-6">
        <Link to="/" className="hover:text-orange-500 transition-colors duration-300">Home</Link>
        <Link to="/cars" className="hover:text-orange-500 transition-colors duration-300">Cars</Link>
        <Link to="/about" className="hover:text-orange-500 transition-colors duration-300">About</Link>
      </div>

      <div className="space-x-4">
        <Link to= "/login" className="border border-orange-500 text-orange-500 px-4 py-2 rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-300">Login</Link>
        <Link to = "/register" className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-all duration-300">Register</Link>
      </div>
    </nav>
  )
}
