import { useDispatch, useSelector } from "react-redux";
import { selectCurrentFilter } from './filter-slice'
import { setFilter } from './filter-slice'

import { LuBadgeCheck, LuCircleCheckBig } from "react-icons/lu";
import { FaRegCircle, FaRegClock } from "react-icons/fa";

const handleSetFilter = (type, dispatch) => {
    // console.log(target.innerText)
    dispatch(setFilter(type));
}

export default function Filter() {
    const dispatch = useDispatch();
    const selectedStatus = useSelector(selectCurrentFilter)

    return (
        <div className="py-[20px]">
            <h3 className="text-lg font-semibold text-gray-700">Filter by status:</h3>
            <div className="flex items-center gap-2">
                <button onClick={() => handleSetFilter("All", dispatch)} className={`flex items-center gap-1 cursor-pointer px-4 py-1 rounded-md border transition duration-200 hover:bg-blue-200 border-gray-300 ${selectedStatus === "All" ? "active-filter" : ""}`}>
                    {<LuBadgeCheck />} All
                </button>
                <button onClick={() => handleSetFilter("New", dispatch)} className={`flex items-center gap-1 cursor-pointer px-4 py-1 rounded-md border transition duration-200 hover:bg-blue-200 border-gray-300 ${selectedStatus === "New" ? "active-filter" : ""}`}>
                    {<FaRegCircle className="text-blue-500" />} New
                </button>
                <button onClick={() => handleSetFilter("In progress", dispatch)} className={`flex items-center gap-1 cursor-pointer px-4 py-1 rounded-md border transition duration-200 hover:bg-yellow-200 border-gray-300 ${selectedStatus === "In progress" ? "active-filter" : ""}`}>
                    {<FaRegClock className="text-yellow-500" />} In progress
                </button>
                <button onClick={() => handleSetFilter("Completed", dispatch)} className={`flex items-center gap-1 cursor-pointer px-4 py-1 rounded-md border transition duration-200 hover:bg-green-200 border-gray-300 ${selectedStatus === "Completed" ? "active-filter" : ""}`}>
                    {<LuCircleCheckBig className="text-green-500" />} Completed
                </button>
            </div>
        </div>
    )
}