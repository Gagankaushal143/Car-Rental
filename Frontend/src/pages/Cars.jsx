import { useEffect, useState } from "react"
import { Filters } from "../components/Filters"
import { SearchBar } from "../components/SearchBar"
import api from "../services/api.js"
import { CarCard } from "../components/CarCard.jsx"
import { Loader } from "../components/Loader.jsx"
import { Pagination } from "../components/Pagination.jsx"

export const Cars = () => {

    const [search, setSearch] = useState("");
    const [totalPages, setTotalPages] = useState(1);
    const [totalCars, setTotalCars] = useState(0);
    const [page, setPage] = useState(1);
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filters, setFilters] = useState({
        brand: "",
        fuelType: "",
        sort: "newest",
        minPrice: "",
        maxPrice: "",
        minSeats: "",
    })

    const handleFilterChange = (name, value) => {
        setFilters((prev) => ({
            ...prev,
            [name]: value,
        }));
    }



    const fetchCars = async () => {
        try {
            await new Promise((resolve) => setTimeout(resolve, 1000));

            const params = {};

            if (search) params.search = search;
            if (filters.brand) params.brand = filters.brand;
            if (filters.fuelType) params.fuelType = filters.fuelType;
            params.sort = filters.sort;
            if (filters.minPrice) params.minPrice = filters.minPrice;
            if (filters.maxPrice) params.maxPrice = filters.maxPrice;
            if (filters.minSeats) params.minSeats = filters.minSeats;
            params.page = page;

            const response = await api.get("/cars", {
                params,
            });

            setCars(response.data.data);
            setTotalPages(response.data.totalPages);
            setTotalCars(response.data.totalCars);
        }
        catch (error) {
            console.log(error)
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchCars();
    }, [search, filters, page, totalPages, totalCars]);
 

    return (
        <section className="min-h-[80vh] p-8 max-w-7xl mx-auto">
            <div className="flex items-center justify-center flex-col gap-10">
                <h1 className="text-5xl font-semibold">Find Your <span className="text-orange-500 font-bold">Ride</span></h1>
                <SearchBar search={search} setSearch={setSearch} />
                <Filters
                    filters={filters}
                    handleFilterChange={handleFilterChange}
                />

            </div>

            {loading ? (
                <Loader />
            ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center py-20">
                    {cars.map((car) => (
                        <CarCard key={car._id} car={car} />
                    ))}
                </div>
                )
            }
            <Pagination currentPage= {page} totalPages={totalPages} setPage={setPage}/>
        </section>
    )
}
