import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { loadTodos } from "@features/Todos/todos-slice"

import { FaExclamationTriangle } from "react-icons/fa";

const handeTryAgain = (dispatch: Dispatch) => {
    // @ts-ignore
    return dispatch(loadTodos())
}

export default function ServerError({ message }: { message: string }) {
    const dispatch = useDispatch();

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-red-100 border border-red-300 rounded-xl shadow-lg text-center">
            <FaExclamationTriangle className="text-red-600 text-4xl mx-auto mb-3"/>
            <h3 className="text-xl font-semibold text-red-700">Oops! Something went wrong</h3>
            <p className="text-red-600 mt-2">
                <strong>Error:</strong> {message}
            </p>
            <button onClick={() => handeTryAgain(dispatch)} className="mt-4 px-4 py-2 bg-red-500 text-white font-medium rounded-lg shadow hover:bg-red-600">
                Try Again
            </button>
        </div>
    )
}