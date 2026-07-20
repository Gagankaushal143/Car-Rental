import { FaCarSide } from "react-icons/fa6";

export const NoCarsFound = () => {
  return (
    <div className="flex flex-col text-gray-400 py-20 justify-center items-center">
        <h1 className="text-3xl font-bold text-gray-600 flex items-center justify-center gap-4"><FaCarSide/> No Car Found</h1>
        <p className="mt-2">We Couldn't find any cars matching your search.</p>
        <p>Try Changing your search or filters.</p>        
    </div>
  )
}
