import { useDispatch } from "react-redux";
import { deleteTodo } from './todos-slice'
import { toggleMode, setTaskId } from '../CreateTaskButton/toggle-form-slice'
import { Dispatch } from "@reduxjs/toolkit";

import { FcHighPriority } from "react-icons/fc";
import { FcMediumPriority } from "react-icons/fc";
import { FcLowPriority } from "react-icons/fc";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";

import './TodoItem.scss'

const statusColors = {
    New: "bg-blue-100 text-blue-700",
    "In progress": "bg-yellow-100 text-yellow-700",
    Completed: "bg-green-100 text-green-700"
};
const priorityColors = {
    Low: {
        className: "bg-teal-100 text-teal-700",
        icon: FcLowPriority
    },
    Medium: {
        className: "bg-orange-100 text-orange-700",
        icon: FcMediumPriority
    },
    High: {
        className: "bg-red-100 text-red-700",
        icon: FcHighPriority
    }
};

const handleDelete = (dispatch: Dispatch, id: string) => {
    // @ts-ignore
    dispatch(deleteTodo(id))
}

const handleEdit = (dispatch: Dispatch, id: string) => {
    dispatch(toggleMode(true));
    dispatch(setTaskId(id))
}

export default function TodoItem({ content }) {
    const dispatch = useDispatch();

    const {title, description, status, priority, id} = content || {};
    const PriorityIcon = priorityColors[priority].icon;

    return (
        <div className="todo-item mb-4 p-4 bg-white rounded-lg todo-item-shadow">
            <div className="py-2 flex justify-between">
                <span className={`px-3 py-1 text-sm font-medium rounded-lg ${statusColors[status]}`}>
                    {status}
                </span>
                <span
                    className={`flex items-center gap-1 px-3 py-1 text-sm font-medium rounded-lg ${priorityColors[priority].className}`}>
                    {priority} {<PriorityIcon/>}
                </span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 break-words">{title}</h3>
            {!!description && (
                <p>{description}</p>
            )}
            <div className="flex gap-2 justify-end mt-3">
                <button onClick={() => handleDelete(dispatch, id)} className="bg-red-500 hover:bg-red-600">
                    {<FaRegTrashCan />} Delete
                </button>
                <button onClick={() => handleEdit(dispatch, id)} className="bg-gray-500 hover:bg-gray-600">
                    {<FaRegEdit />} Edit
                </button>
            </div>
        </div>
    )
}