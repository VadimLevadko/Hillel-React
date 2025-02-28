import { useFormik } from "formik";
import { newTodoSchema } from '../../schemas/index.js'

import './NewTodo.scss'

const onSubmit = (values, action) => {
    console.log(values)
    action.resetForm()
}

export default function NewTodo() {
    const { values, handleChange, handleSubmit, errors } = useFormik({
        initialValues: {
            title: "",
            description: "",
            status: "New",
            priority: "Low",
        },
        validationSchema: newTodoSchema,
        onSubmit,
    })
    console.log(errors)
    return (
        <form onSubmit={handleSubmit} className="new-todo-form max-w-md mx-auto p-6 bg-gray-100 shadow-md rounded-xl border border-gray-300" autoComplete="off">
            <div className="py-2">
                <label className="block text-2xl font-bold text-gray-900" htmlFor="title">Title for todo</label>
                <input
                    className="text-gray-700 mt-2 w-full"
                    id="title"
                    type="text"
                    placeholder="Do something..."
                    onChange={handleChange}
                    value={values.title}
                />
            </div>
            <hr/>
            <div className="py-2">
                <label className="block text-lg font-semibold text-gray-800" htmlFor="description">Description</label>
                <textarea
                    className="text-gray-600 mt-2 w-full p-1 focus-visible:outline-none"
                    id="description"
                    rows="3"
                    onChange={handleChange}
                    value={values.description}
                    placeholder="Do something..."
                />
            </div>
            <hr/>
            <div className="mt-5 flex justify-between items-center">
                <div className="flex items-center">
                    <label className="block text-gray-700 font-medium" htmlFor="status">Status:</label>
                    <select className="ml-2 py-1 px-2 border rounded-md bg-white text-[1rem]" id="status" onChange={handleChange} value={values.status}>
                        <option value="New">New</option>
                        <option value="In progress">In progress</option>
                        <option value="Completed">Completed</option>
                    </select>
                </div>
                <div className="flex items-center">
                    <label className="block text-gray-700 font-medium" htmlFor="priority">Priority:</label>
                    <select className="ml-2 py-1 px-2 border rounded-md bg-white text-[1rem]" id="priority" onChange={handleChange} value={values.priority}>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                </div>
            </div>
            <div className="mt-6 text-center">
                <button
                    className="mx-auto px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700"
                    type="submit">Create task
                </button>
            </div>
        </form>
    )
}