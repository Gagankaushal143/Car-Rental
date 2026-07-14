import PlaceholderImg from "../assets/images/propImg.png"

export const CarCard = ({ car }) => {
  return (
    <div className="group max-w-xs px-4 rounded-xl shadow-lg hover:shadow-2xl space-y-4 py-4 hover:-translate-y-2 transition-all duration-300 bg-white">
        <div className="p-4 bg-orange-50 rounded-lg group-hover:scale-105 transition-transform duration-300">
            <img src={PlaceholderImg} alt={car.title} />
        </div>

        <div className="flex flex-col ">
            <h1 className="text-xl font-semibold pl-1">{car.title}</h1>
            <p className="text-lg">📍{car.location}</p>
        </div>

        <div className="flex items-center gap-6">
            <span>⛽ {car.fuelType}</span>
            <span>⚙️ {car.transmission}</span>
            <span>💺 {car.seats}</span>
        </div>

        <div className="flex items-center justify-between py-4">
            <p><span className="font-bold text-lg text-orange-500">₹{car.pricePerDay}</span>/day</p>
            <a href="" className="border-2 border-orange-500 px-4 py-2 rounded-lg text-orange-500 group-hover:bg-orange-500 group-hover:text-white shadow-lg group-hover:shadow-gray-300 transition-colors duration-300">View Details →</a>
        </div>
    </div>
  )
}
