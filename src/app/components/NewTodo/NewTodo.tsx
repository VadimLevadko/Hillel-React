import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { selectStatusForm, toggleForm } from '../../../features/CreateTaskButton/toggle-form-slice'
import { createTodo } from '../../../features/Todos/todos-slice.js'
import { newTodoSchema } from '../../../utils/schemaValidation.js'

import { IoAlertCircleOutline } from "react-icons/io5";
import { MdClose } from "react-icons/md";

const handleCloseForm = (dispatch) => {
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
        <div className={`new-todo-wrapper bg-[#161b1eCC] flex flex-col items-center w-full h-[100vh] fixed top-0 left-0 z-[2] px-[20px] pt-[50px] ${isHidden ? 'hidden' : 'block'}`}>
            <form onSubmit={handleSubmit}
                  className="bg-white p-8 rounded-3xl shadow-xl max-w-[440px] w-full relative transform scale-105 transition-all hover:scale-110"
                  autoComplete="off">
                <span onClick={() => handleCloseForm(dispatch)} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors cursor-pointer">
                    {<MdClose size={30} />}
                </span>
                <h2 className="new-task-title">New Task</h2>
                <div className="mb-[14px]">
                    <input
                        className={`${!!errors.title ? "border-red-500" : ""}`}
                        id="title"
                        type="text"
                        placeholder="Task Title..."
                        onChange={handleChange}
                        value={values.title}
                    />
                    {!!errors.title && touched.title && (
                        <span className="error-input-message">
                            <IoAlertCircleOutline />
                            {errors.title}
                        </span>
                    )}
                </div>
                <div className="mb-[14px]">
                    <textarea
                        className=""
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
                        <select id="status" onChange={handleChange} value={values.status}>
                            <option value="New">New</option>
                            <option value="In progress">In progress</option>
                            <option value="Completed">Completed</option>
                        </select>
                    </div>
                    <div className="flex-1">
                        <label className="block text-sm text-gray-600" htmlFor="priority">Priority:</label>
                        <select id="priority" onChange={handleChange} value={values.priority}>
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                        </select>
                    </div>
                </div>
                <div className="mt-6 text-center">
                    <button type="submit">Create task</button>
                </div>
            </form>
        </div>
    )
}