import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../services/api.js";
import { Loader } from "../components/Loader.jsx";
import PlaceholderImage from "../assets/images/propImg.png"
import { Link } from "react-router-dom";
import { FaCar, FaRegCalendarAlt, FaRegHeart } from "react-icons/fa";
import { FaGear, FaLocationDot, FaCheck  } from "react-icons/fa6";
import { BsFuelPumpFill } from "react-icons/bs";
import { IoMdSpeedometer } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { MdChair } from "react-icons/md";

export const CarDetails = () => {

  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  const fetchCar = async () => {
    try {

      const response = await api.get(`/cars/${id}`);

      setCar(response.data.data);
    }
    catch (error) {
      console.log(error);
    }
    finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCar();
  }, [id]);

  if (loading) {
    return <Loader />
  }



  return (
    <section className="max-w-7xl mx-auto px-4 py-10 space-y-4">
      <div className="pb-4">
        <Link to={"/cars"} className="border border-orange-500 px-4 py-2 rounded-lg text-orange-500 shadow-lg transition-colors duration-300 hover:bg-orange-500 hover:text-white">← Back to Cars</Link>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 bg-white shadow-xl rounded-xl items-center">

        <div className="h-full p-6">
          <div className="overflow-hidden object-cover bg-orange-50 rounded-xl h-full flex items-center justify-center">
            <img src={PlaceholderImage} alt={car.title} className="hover:scale-105 transition-transform duration-300" />
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold">{car.title}</h1>
            <p>⭐⭐⭐⭐⭐</p>
            <p className="text-xl text-orange-500 font-bold">₹{car.pricePerDay}<span className="text-black font-normal">/day</span></p>
          </div>

          <div className="flex justify-center py-4 flex-col bg-white shadow-md rounded-xl px-4">
            <div className="border-b border-gray-300 grid grid-cols-2 py-1">
              <h1 className="flex items-center gap-2"><FaCar className="text-gray-500" /> Brand</h1>
              <span>{car.brand}</span>
            </div>
            <div className="border-b border-gray-300 grid grid-cols-2 py-1">
              <h1 className="flex items-center gap-2"><FaCar className="text-gray-500" /> Model</h1>
              <span>{car.model}</span>
            </div>
            <div className="border-b border-gray-300 grid grid-cols-2 py-1">
              <h1 className="flex items-center gap-2"><FaRegCalendarAlt className="text-gray-500" /> Year</h1>
              <span>{car.year}</span>
            </div>
            <div className="border-b border-gray-300 grid grid-cols-2 py-1">
              <h1 className="flex items-center gap-2"><BsFuelPumpFill className="text-gray-500" /> Fuel Type</h1>
              <span>{car.fuelType}</span>
            </div>
            <div className="border-b border-gray-300 grid grid-cols-2 py-1">
              <h1 className="flex items-center gap-2"><FaGear className="text-gray-500" /> Transmission</h1>
              <span>{car.transmission}</span>
            </div>
            <div className="border-b border-gray-300 grid grid-cols-2 py-1">
              <h1 className="flex items-center gap-2"><MdChair className="text-gray-500" /> Seats</h1>
              <span>{car.seats}</span>
            </div>
            <div className="border-b border-gray-300 grid grid-cols-2 py-1">
              <h1 className="flex items-center gap-2"><IoMdSpeedometer className="text-gray-500" /> Mileage</h1>
              <span>{car.mileage} Kmpl</span>
            </div>
            <div className="grid grid-cols-2 py-1">
              <h1 className="flex items-center gap-2"><FaLocationDot className="text-gray-500" /> Location</h1>
              <span>{car.location}</span>
            </div>
          </div>
          <div className="py-4 flex items-center space-x-20">
            <a href="" className="px-12 py-3 bg-orange-500 font-semibold text-white rounded-lg shadow-lg shadow-gray-300 hover:shadow-orange-300 hover:shadow-md transition-colors duration-300 hover:bg-orange-600 flex items-center justify-center gap-2" ><IoCall /> Book Now</a>
            <a href="" className="border border-orange-500 px-12 py-3 rounded-lg text-orange-500 shadow-lg transition-colors duration-300 hover:bg-orange-500 hover:text-white flex items-center justify-center gap-2"><FaRegHeart /> Wishlist </a>
          </div>
        </div>
      </div>
      <div className="px-4 py-2 bg-white shadow-lg rounded-xl">
        <div className="pb-4">
          <span className="text-xl font-semibold border-b-2 border-orange-400">Description</span>
        </div>
        <p>The {car.title} is the perfect blend of style, comfort and performance. It offers a premium driving experience with a specious cabin, advanced safety features and excellent fuel efficiency. Ideal for both city drives and highway journeys</p>

        <div className="py-4 w-full flex items-center justify-around">
          <span className="px-4 py-2 bg-orange-100 rounded-lg text-orange-500 flex items-center justify-center gap-2"><FaCheck/>Spacious & Comfortable</span>
          <span className="px-4 py-2  bg-orange-100 rounded-lg text-orange-500 flex items-center justify-center gap-2"><FaCheck/>Advanced Safety</span>
          <span className="px-4 py-2  bg-orange-100 rounded-lg text-orange-500 flex items-center justify-center gap-2"><FaCheck/>Smooth Performance</span>
          <span className="px-4 py-2  bg-orange-100 rounded-lg text-orange-500 flex items-center justify-center gap-2"><FaCheck/>Fuel Effiecient</span>
          <span className="px-4 py-2  bg-orange-100 rounded-lg text-orange-500 flex items-center justify-center gap-2"><FaCheck/>Ideal for City & Highway</span>
        </div>
      </div>
    </section>
  )
}
