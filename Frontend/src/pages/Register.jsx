import { useState } from "react"
import { Link } from "react-router-dom"

export const Register = () => {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  // const [loading , setLoading] = useState(false);

  const handleChange = (e) =>{
    const {name, value} = e.target;

    setFormData((prev) => ({
      ...prev,
      [name] : value,
    }));
  };

  const handleSubmit = async (e) =>{
    e.preventDefault();

    if(formData.password !== formData.confirmPassword){
      alert("Password do not match")
    }

    if(formData.)

    console.log(formData);
  }



  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen my-4">
      <form onSubmit={handleSubmit} className="bg-gray-100 p-8 space-y-6 min-w-lg rounded-2xl shadow-xl">
        <div className="text-center text-4xl">
          <h1 className="text-orange-500 font-bold">Rental<span className="text-black">X</span></h1>
        </div>

        <div className="flex flex-col justify-center items-center gap-3 mb-10">
          <h1 className="text-2xl">Create Your Account</h1>
          <h3 className="text-lg text-gray-700">Join RentalX and start your journey.</h3>
        </div>


        <div className="flex flex-col items-center justify-center gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="w-full flex flex-col gap-1">
              <label className="text-gray-700">First Name</label>
              <input className="px-4 py-2 border border-gray-400 rounded-lg bg-gray-50 outline-none focus:ring focus:ring-orange-500 focus:border-orange-500 transition-all" type="text" name="firstName" value={formData.firstName} onChange={handleChange}/>
            </div>
            <div className="w-full flex flex-col gap-1">
              <label className="text-gray-700">Last Name</label>
              <input className="px-4 py-2 border border-gray-400 rounded-lg bg-gray-50 outline-none focus:ring focus:ring-orange-500 focus:border-orange-500 transition-all" type="text" name="lastName" value={formData.lastName} onChange={handleChange}/>
            </div>
          </div>
          <div className="w-full flex flex-col gap-1">
            <label className="text-gray-700">Email</label>
            <input className="px-4 py-2 border border-gray-400 rounded-lg bg-gray-50 outline-none focus:ring focus:ring-orange-500 focus:border-orange-500 transition-all" type="email" name="email" value={formData.email} onChange={handleChange}/>
          </div>
          <div className="w-full flex flex-col gap-1">
            <label className="text-gray-700">Phone</label>
            <input className="px-4 py-2 border border-gray-400 rounded-lg bg-gray-50 outline-none focus:ring focus:ring-orange-500 focus:border-orange-500 transition-all" type="text" name="phone" value={formData.phone} onChange={handleChange}/>
          </div>
          <div className="w-full flex flex-col gap-1">
            <label className="text-gray-700">Password</label>
            <input className="px-4 py-2 border border-gray-400 rounded-lg bg-gray-50 outline-none focus:ring focus:ring-orange-500 focus:border-orange-500 transition-all" type="password" name="password" value={formData.password} onChange={handleChange}/>
          </div>
          <div className="w-full flex flex-col gap-1">
            <label className="text-gray-700">Confirm Password</label>
            <input className="px-4 py-2 border border-gray-400 rounded-lg bg-gray-50 outline-none focus:ring focus:ring-orange-500 focus:border-orange-500 transition-all" type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange}/>
          </div>

        </div>

        <button className="flex items-center justify-center w-full border py-2 bg-orange-500 rounded-lg text-white font-semibold hover:bg-orange-600 hover:scale-102 transition-all duration-300 cursor-pointer" onClick={handleSubmit}>Register</button>
        <div className="flex items-center justify-center flex-col">
          <span>Already have an account?</span>
          <Link to={"/login"} className="text-orange-500 hover:text-orange-600">Login here</Link>
        </div>
      </form>
    </div>
  )
}
