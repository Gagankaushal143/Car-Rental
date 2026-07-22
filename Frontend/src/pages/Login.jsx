// import LogoImg from "../assets/imagesRentalX.png"
import { Link } from "react-router-dom"


export const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen">
      <div className="bg-gray-100 p-8 space-y-6 min-w-md rounded-2xl shadow-xl">
        <div className="text-center text-4xl">
          <h1 className="text-orange-500 font-bold">Rental<span className="text-black">X</span></h1>
        </div>

        <div className="flex flex-col justify-center items-center gap-3">
          <h1 className="text-2xl">Welcome Back</h1>
          <h3 className="text-lg text-gray-700">Sign in to continue your journey</h3>
        </div>


        <div className="flex flex-col items-center justify-center gap-4">
          <div className="w-full flex flex-col gap-1">
            <label className="text-gray-700">Email Address</label>
            <input className="px-4 py-2 border border-gray-400 rounded-lg bg-gray-50 outline-none focus:ring focus:ring-orange-500 focus:border-orange-500 transition-all" type="email" />
          </div>
          <div className="w-full flex flex-col gap-1">
            <label className="text-gray-700">Password</label>
            <input className="px-4 py-2 border border-gray-400 rounded-lg bg-gray-50 outline-none focus:ring focus:ring-orange-500 focus:border-orange-500 transition-all" type="password" />
          </div>

        </div>
          <div className="text-right text-sm text-gray-500 transition-colors hover:text-orange-600">
            <a href="#">Forgot Password?</a>
          </div>
          <button className="flex items-center justify-center w-full border py-2 bg-orange-500 rounded-lg text-white font-semibold hover:bg-orange-600 hover:scale-102 transition-all duration-300 cursor-pointer">Login</button>
        <div className="flex items-center justify-center flex-col">
          <span>Don't have an account?</span> 
          <Link to={"/register"} className="text-orange-500 hover:text-orange-600">Create Account</Link>
        </div>
      </div>
    </div>
  )
}
