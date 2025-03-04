import * as yup from 'yup';

export const newTodoSchema = yup.object().shape({
    title: yup.string().required('Title is required'),
    description: yup.string(),
    status: yup.string().oneOf(['New', 'In progress', 'Completed']).required("Required field"),
    priority: yup.string().oneOf(['Low', 'Medium', 'High']).required("Required field")
})