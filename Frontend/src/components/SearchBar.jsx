import { FaSearch } from "react-icons/fa";

export const SearchBar = ({search, setSearch}) => {
    return (
        <div className="relative group focus-within:text-orange-400">
            <FaSearch className="absolute top-5 left-5 text-xl text-gray-400 group-focus-within:text-orange-400 transition-colors duration-300" />

            <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search by title, brand or location" className="group min-w-4xl px-12 py-4 rounded-full bg-white border-2 border-gray-200 outline-none focus:border-orange-500 text-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-orange-200 transition-all duration-300 shadow-md hover:shadow-lg" />
        </div>
    )
}
