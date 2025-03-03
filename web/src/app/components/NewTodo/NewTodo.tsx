import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { selectStatusForm, toggleForm } from '../../../features/CreateTaskButton/toggle-form-slice'
import { createTodo } from '../../../features/Todos/todos-slice.js'
import { newTodoSchema } from '../../../utils/schemaValidation.js'

import { IoAlertCircleOutline } from "react-icons/io5";
import { MdClose } from "react-icons/md";

import './NewTodo.scss'

const handleCloseForm = (dispatch) => {
    console.log(1)
    return dispatch(toggleForm());
}

export default function NewTodo() {
    const dispatch = useDispatch();
    const isHidden = useSelector(selectStatusForm);

    const { values, handleChange, handleSubmit, errors, touched } = useFormik({
        initialValues: {
            title: "",
            description: "",
            status: "New",
            priority: "Low",
        },
        validationSchema: newTodoSchema,
        onSubmit: function (values, action) {
            // @ts-ignore
            dispatch(createTodo(values))
            handleCloseForm(dispatch)
            action.resetForm()
        },
    })
    return (
        <div className={`bg-[#161b1eCC] flex flex-col items-center w-full h-[100vh] fixed top-0 left-0 z-[2] px-[20px] pt-[50px] ${isHidden ? 'hidden' : 'block'}`}>
            <form onSubmit={handleSubmit}
                  className="bg-white p-8 rounded-3xl shadow-xl max-w-[440px] w-full relative transform scale-105 transition-all hover:scale-110"
                  autoComplete="off">
                <span onClick={() => handleCloseForm(dispatch)} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors cursor-pointer">
                    {<MdClose size={30} />}
                </span>
                <h2 className="text-2xl font-bold text-center text-gray-700 mb-[18px]">New Task</h2>
                <div className="mb-[14px]">
                    <input
                        className={`w-full px-3 py-2 border rounded-xl text-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 ${!!errors.title ? "border-red-500" : ""}`}
                        id="title"
                        type="text"
                        placeholder="Task Title..."
                        onChange={handleChange}
                        value={values.title}
                    />
                    {!!errors.title && touched.title && (
                        <span className="text-red-500 text-sm flex items-center mt-2 gap-1">
                            <IoAlertCircleOutline />
                            {errors.title}
                        </span>
                    )}
                </div>
                <div className="mb-[14px]">
                    <textarea
                        className="w-full p-3 border border-gray-300 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        id="description"
                        rows={3}
                        onChange={handleChange}
                        value={values.description}
                        placeholder="Task Description..."
                    />
                </div>
                <div className="flex justify-between items-center gap-5">
                    <div className="flex-1">
                        <label className="block text-sm text-gray-600" htmlFor="status">Status:</label>
                        <select className="w-full px-2 py-1 border border-gray-300 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-blue-400" id="status"
                                onChange={handleChange} value={values.status}>
                            <option value="New">New</option>
                            <option value="In progress">In progress</option>
                            <option value="Completed">Completed</option>
                        </select>
                    </div>
                    <div className="flex-1">
                        <label className="block text-sm text-gray-600" htmlFor="priority">Priority:</label>
                        <select className="w-full px-2 py-1 border border-gray-300 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-blue-400" id="priority"
                                onChange={handleChange} value={values.priority}>
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                        </select>
                    </div>
                </div>
                <div className="mt-6 text-center">
                    <button
                        className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-2 rounded-xl text-lg font-semibold hover:shadow-lg transition-transform transform hover:scale-105 cursor-pointer"
                        type="submit">Create task
                    </button>
                </div>
            </form>
        </div>
    )
}