import { useDispatch, useSelector } from "react-redux";
import { selectCurrentFilter, setFilter } from './filter-slice'
import { Dispatch } from "@reduxjs/toolkit";

import { LuBadgeCheck, LuCircleCheckBig } from "react-icons/lu";
import { FaRegCircle, FaRegClock } from "react-icons/fa";

const handleSetFilter = (type: string, dispatch: Dispatch) => {
    dispatch(setFilter(type));
}

export default function Filter() {
    const dispatch = useDispatch();
    const selectedStatus = useSelector(selectCurrentFilter)

    return (
        <div className="filter-wrapper py-[20px]">
            <h3 className="text-lg font-semibold text-gray-700">Filter by status:</h3>
            <div className="flex items-center flex-wrap gap-2">
                <button onClick={() => handleSetFilter("All", dispatch)} className={`hover:bg-blue-200 ${selectedStatus === "All" ? "active-filter" : ""}`}>
                    {<LuBadgeCheck />} All
                </button>
                <button onClick={() => handleSetFilter("New", dispatch)} className={`hover:bg-blue-200 ${selectedStatus === "New" ? "active-filter" : ""}`}>
                    {<FaRegCircle className="text-blue-500" />} New
                </button>
                <button onClick={() => handleSetFilter("In progress", dispatch)} className={`hover:bg-yellow-200 ${selectedStatus === "In progress" ? "active-filter" : ""}`}>
                    {<FaRegClock className="text-yellow-500" />} In progress
                </button>
                <button onClick={() => handleSetFilter("Completed", dispatch)} className={`hover:bg-green-200 ${selectedStatus === "Completed" ? "active-filter" : ""}`}>
                    {<LuCircleCheckBig className="text-green-500" />} Completed
                </button>
            </div>
        </div>
    )
}