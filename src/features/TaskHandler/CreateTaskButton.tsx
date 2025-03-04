import { useDispatch } from "react-redux";
import { toggleMode } from './toggle-form-slice'

import { FaPlus } from "react-icons/fa";

export default function CreateTaskButton() {
    const dispatch = useDispatch();

    return (
        <>
            <button
                onClick={() => dispatch(toggleMode(false))}
                className="fixed flex justify-center items-center bottom-[20px] right-[40px] cursor-pointer w-[40px] h-[40px] bg-green-600/75 rounded z-[1]">
                <FaPlus className="text-white" />
            </button>
        </>
    )
}