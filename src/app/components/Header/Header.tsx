import { useDispatch } from "react-redux";
import { toggleMode } from '@features/TaskHandler/toggle-form-slice'

export default function Header() {
    const dispatch = useDispatch();

    return (
        <header className="flex justify-between items-center bg-gray-800 text-white px-6 py-4 shadow-md">
            <div>
                <h1 className="text-2xl font-bold text-blue-400">Vadim Levadko</h1>
                <p className="text-sm text-gray-300">Junior Front-end Developer</p>
            </div>
            <button
                onClick={() => dispatch(toggleMode(false))}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
                + Create Task
            </button>
        </header>
    )
}