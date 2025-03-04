import { CgSpinner } from "react-icons/cg";

export default function Loading() {
    return (
        <div className="text-center py-2">
                <span className="inline-flex cursor-not-allowed items-center rounded-md bg-indigo-500 px-4 py-2 text-sm leading-6 font-semibold text-white transition duration-150 ease-in-out hover:bg-indigo-400">
                    <CgSpinner className="mr-3 -ml-1 size-5 animate-spin text-white"/>
                    Loading...
                </span>
        </div>
    )
}