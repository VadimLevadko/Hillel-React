export type TodoItemType = {
    id?: string;
    title: string;
    description: string;
    status: 'New' | 'Completed' | 'In progress';
    priority: 'Low' | 'Medium' | 'High';
}

export type StoreType = {
    todos: {
        entities: TodoItemType[],
        loading: "idle" | 'loading',
        error: null | string,
    },
    filter: string,
    toggleForm: {
        isHidden: boolean,
        isEditMode: boolean,
        taskId: string,
    }
}