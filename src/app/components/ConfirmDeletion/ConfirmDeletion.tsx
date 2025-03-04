import { IoMdClose } from "react-icons/io";

export default function ConfirmDeletion() {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
                <button className="absolute top-3 right-3 text-gray-500 hover:text-gray-700">
                    <IoMdClose size={20}/>
                </button>
                <h2 className="text-lg font-semibold text-center">Confirm Deletion</h2>
                <p className="text-gray-600 text-center mt-2">Are you sure you want to delete this task?</p>
                <div className="mt-4 flex justify-center gap-4">
                    <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition">
                        Yes, delete
                    </button>
                    <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 transition">
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    )
}