export type TodoItemType = {
    id?: string;
    title: string;
    description: string;
    status: 'New' | 'Complete' | 'In progress';
    priority: 'Low' | 'Medium' | 'High';
}