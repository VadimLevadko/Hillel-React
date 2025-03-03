import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { loadTodos } from './todos-slice'
import { selectVisibleTodos } from '../Filtres/filter-slice'

import TodoItem from './TodoItem'
import Filter from '../Filtres/Filter'

import { LiaClipboardListSolid } from "react-icons/lia";

import { TodoItemType } from "../../utils/schemaTypes";

export default function TodoSection() {
    const dispatch = useDispatch<any>();
    const filteredTodos = useSelector(selectVisibleTodos)
    console.log(filteredTodos)
    const { entities: todoList, loading, error } = filteredTodos || {};

    useEffect(() => {
        dispatch(loadTodos())
    }, []);

    if(loading === 'loading') {
        return <h2>Loading...</h2>
    }

    return (
        <section>
            <div className="max-w-[1240px] mx-auto py-[40px]">
                <h2 className="text-3xl font-bold flex items-center justify-center gap-1 mb-[10px] text-gray-700">
                    {<LiaClipboardListSolid />} Todo List
                </h2>
                <Filter />
                <div className="grid grid-cols-3 gap-4">
                    {!!todoList && (
                        todoList.map((todo: TodoItemType) => {
                            return <TodoItem content={todo} key={todo.id} />
                        })
                    )}
                </div>
            </div>
        </section>
    )
}