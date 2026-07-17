import { FaCar, FaRegUser } from "react-icons/fa";
import HeroCar from "../assets/images/heroImg.png";
import { FaLocationDot, FaCheck  } from "react-icons/fa6";
import { IoStarSharp } from "react-icons/io5";
import { MdExplore } from "react-icons/md";
import { Link } from "react-router-dom"


export const Hero = () => {
  return (
    <section className="grid lg:grid-cols-2 py-10 min-h-[80vh] place-items-center mx-auto max-w-7xl">
      <div className="flex flex-col px-4 py-2 gap-8">
        <div className="leading-tight">
          <h1 className="text-6xl font-semibold">Find Your</h1>
          <h1 className="text-6xl font-bold"><span className="text-orange-400"> Perfect Rental Car</span></h1>
        </div>

        <div>
          <p className="flex flex-col gap-2">
            <span className="flex text-orange-500 text-lg gap-1">
              <IoStarSharp/> <IoStarSharp/><IoStarSharp/><IoStarSharp/><IoStarSharp/>
            </span>
             Trusted by 12000+ customers
             </p>
        </div>

        <div className="text-2xl">
          <h3>Discover premium cars a affordable prices.</h3>
          <h3>Book your ride in minutes and enjoy a smooth journey.</h3>
        </div>

        <div className="w-full flex items-center space-x-16">
          <Link to={"/cars"} className="bg-orange-400 text-white shadow-lg shadow-orange-200 px-6 py-3 text-lg rounded-md hover:bg-orange-500 transition-all duration-300 hover:scale-105"> 
          <span className="flex items-center justify-center gap-2">
            <MdExplore/>
            Explore Cars 
          </span>
          </Link>
          <a className="bg-gray-50 border-2 border-gray-400 px-6 py-3 rounded-md text-lg shadow-lg shadow-gray-400 hover:border-orange-500 hover:text-orange-500  transition-all duration-300 hover:scale-105" href="">List Your Car</a>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 text-lg opacity-75 pt-8">
          <p className="flex items-center justify-center gap-2"><FaCar className="text-orange-500"/> 500+ Cars</p>
          <p className="flex items-center justify-center gap-2"><FaRegUser className="text-orange-500"/> 12K+ Customers</p>
          <p className="flex items-center justify-center gap-2"><FaLocationDot className="text-orange-500"/> 50+ Cities</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 opacity-75">
          <p className="flex items-center justify-center gap-2"><FaCheck className="text-orange-500"/> No Hidden Charges</p>
          <p className="flex items-center justify-center gap-2"><FaCheck className="text-orange-500"/> 24/7 Support</p>
          <p className="flex items-center justify-center gap-2"><FaCheck className="text-orange-500"/> Instant Booking</p>
        </div>
      </div>


      {/* Right side=========================== */}
      <div>
        <img src={HeroCar} alt="Luxury Car" />
      </div>
    </section>
  )
}
