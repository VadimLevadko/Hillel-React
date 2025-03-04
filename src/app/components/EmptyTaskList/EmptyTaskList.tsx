import { useDispatch } from "react-redux";
import { toggleVisibility } from "@features/TaskHandler/toggle-form-slice"

import { FaClipboardList } from "react-icons/fa";

export default function EmptyTaskList() {
    const dispatch = useDispatch();

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 border border-gray-300 rounded-xl shadow-lg text-center">
            <FaClipboardList className="text-gray-500 text-4xl mx-auto mb-3"/>
            <h2 className="text-xl font-semibold text-gray-700">No tasks available</h2>
            <p className="text-gray-600 mt-2">You have no tasks at the moment. Add a new task to get started.</p>
            <button onClick={() => dispatch(toggleVisibility())} className="mt-4 px-4 py-2 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700">
                Add Task
            </button>
        </div>
    )
}