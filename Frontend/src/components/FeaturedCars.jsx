// import PlaceholderCar from "../assets/images/propImg.png";
import { CarCard } from "./CarCard";
import  api  from "../services/api.js";
import { useEffect, useState } from "react";

export const FeaturedCars = () => {

    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchCars = async () =>{
        try{

            await new Promise((resolve) => setTimeout(resolve, 2000))

            const response = await api.get("/cars");
            setCars(response.data.data);
        }
        catch(error){
            console.log(error);
        }
        finally{
            setLoading(false);
        }
    }

    
    
    useEffect(() =>{
        fetchCars();
    },[]);


    
    if(loading){
        return(
            <div className="flex items-center justify-center py-20 ">
                Loading Cars..
            </div>
        )
    }
    

  return (
    <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto ">
            <h1 className="text-5xl text-orange-400 text-center font-bold text-shadow-xs text-shadow-gray-400 py-4">
                Featured Cars
            </h1>

            <h3 className="pt-4 text-lg text-gray-600 flex flex-col items-center mx-auto max-w-4xl">
                <span>
                    Browse our handpicked collection of premium rental cars for every journey.
                </span> 
                <span>
                    Whether it's a family trip or a business ride, we've got the perfect car for you.
                </span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center py-20">
                {
                    cars.map((car) =>(
                        <CarCard  key={car._id} car={car}/>
                    ))
                }
            </div>
        </div>
    </section>
  )
}
