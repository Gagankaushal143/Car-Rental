
export const Filters = ({filters, handleFilterChange }) => {

    const selectStyle = `
w-full
px-4
py-3
rounded-xl
border
border-gray-300
bg-white
text-gray-700
outline-none
cursor-pointer
transition-all
duration-300
focus:border-orange-500
focus:ring-2
focus:ring-orange-200
`;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 items-center gap-6 max-w-6xl mx-auto rounded-xl bg-white shadow-lg py-4 px-4">
            <div className="flex flex-col items-center gap-2 ">
                <label className="text-base font-medium text-gray-600">Brand </label>
                <select name="brand" id="brand" value={filters.brand} onChange={(e) => handleFilterChange("brand", e.target.value)} className={selectStyle}>
                    <option value="">All Brands</option>
                    <option value="BMW">BMW</option>
                    <option value="Audi">Audi </option>
                    <option value="Hyundai">Hyundai</option>
                    <option value="Tata">Tata</option>
                    <option value="Mahindra">Mahindra</option>
                    <option value="Toyota">Toyota</option>
                    <option value="Honda">Honda</option>
                </select>
            </div>

            <div className="flex flex-col items-center gap-2 ">
                <label className="text-base font-medium text-gray-600">Fuel Type </label>
                <select name="fuelType" id="fuelType" value={filters.fuelType} onChange={(e) => handleFilterChange("fuelType", e.target.value)} className={selectStyle}>
                    <option value="">All Fuel Types</option>
                    <option value="Petrol">Petrol</option>
                    <option value="Diesel">Diesel</option>
                    <option value="Electric">Electric</option>
                    <option value="Hybrid">Hybrid</option>
                </select>
            </div>

            <div className="flex flex-col items-center gap-2 ">
                <label className="text-base font-medium text-gray-600">
                    Seats
                </label>
                <select name="seats" id="seats" value={filters.minSeats} onChange={(e) => handleFilterChange("minSeats", e.target.value)} className={selectStyle}>
                    <option value="">Any</option>
                    <option value="2">2+</option>
                    <option value="4">4+</option>
                    <option value="5">5+</option>
                    <option value="7">7+</option>
                </select>
            </div>

            <div className="flex flex-col items-center gap-2 ">
                <label className="text-base font-medium text-gray-600">Price Range</label>
                <div className="flex gap-3">
                    <input type="number" placeholder="Min ₹" value={filters.minPrice} onChange={(e) => handleFilterChange("minPrice", e.target.value)}  className={`${selectStyle} [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none`} />
                    <input type="number" placeholder="Max ₹" value={filters.maxPrice} onChange={(e) => handleFilterChange("maxPrice", e.target.value)} className={`${selectStyle} [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none`} />
                </div>
            </div>

            <div className="flex flex-col items-center gap-2 ">
                <label className="text-base font-medium text-gray-600">Sort by </label>
                <select name="sort" id="sort" value={filters.sort} onChange={(e) => handleFilterChange("sort", e.target.value)} className={selectStyle}>
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
                    <option value="price-low">Price: Low → High</option>
                    <option value="price-high">Price: High → Low</option>
                </select>
            </div>

            <div className="flex items-center justify-center">
                <a href="" className="border-2 border-orange-500 text-orange-500 shadow-lg shadow-gray-300 hover:shadow-orange-200 px-6 py-3 rounded-xl hover:bg-orange-500 hover:text-white transition-colors duration-300">Clear Filters</a>
            </div>
        </div>
    )
}
