import HeroCar from "../assets/images/heroImg.png";


export const Hero = () => {
  return (
    <section className="grid lg:grid-cols-2 p-8 min-h-[80vh] place-items-center mx-auto">
      <div className="flex flex-col px-8 gap-10 mt-10">
        <div className="leading-tight">
          <h1 className="text-6xl font-semibold">Find Your</h1>
          <h1 className="text-6xl font-bold"><span className="text-orange-400"> Perfect Rental Car</span></h1>
        </div>

        <div>
          <span>⭐⭐⭐⭐⭐ Trusted by 12000+ customers</span>
        </div>

        <div className="text-2xl">
          <h3>Discover premium cars a affordable prices.</h3>
          <h3>Book your ride in minutes and enjoy a smooth journey.</h3>
        </div>

        <div className="w-full flex items-center space-x-16">
          <a className="bg-orange-400 text-white shadow-lg shadow-orange-200 px-6 py-3 text-lg rounded-md hover:bg-orange-500 transition-all duration-300 hover:scale-105" href="">Explore Cars</a>
          <a className="bg-gray-50 border-2 border-gray-400 px-6 py-3 rounded-md text-lg shadow-lg shadow-gray-400 hover:border-orange-500 hover:text-orange-500  transition-all duration-300 hover:scale-105" href="">List Your Car</a>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 text-lg opacity-75 pt-8">
          <span>🚗 500+ Cars</span>
          <span>😊 12K+ Customers</span>
          <span>📍 50+ Cities</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 opacity-75">
          <span>✅ No Hidden Charges</span>
          <span>✅ 24/7 Support</span>
          <span>✅ Instant Booking</span>
        </div>
      </div>


      {/* Right side=========================== */}
      <div>
        <img src={HeroCar} alt="Luxury Car" />
      </div>
    </section>
  )
}
