import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { loadTodos } from './todos-slice'
import { selectVisibleTodos } from '@features/Filtres/filter-slice'

import Loading from "@components/Loading"
import TodoItem from './TodoItem'
import Filter from '@features/Filtres/Filter'
import ServerError from "@components/ServerError";

import { LiaClipboardListSolid } from "react-icons/lia";

import { TodoItemType } from "@utils/schemaTypes";

export default function TodoSection() {
    const dispatch = useDispatch<any>();
    const filteredTodos = useSelector(selectVisibleTodos)
    const { entities: todoList, loading, error } = filteredTodos || {};

    useEffect(() => {
        dispatch(loadTodos())
    }, []);

    if(loading === 'loading') {
        return <Loading />
    }

    return (
        <section>
            <div className="max-w-[1240px] mx-auto py-[40px] px-[20px]">
                <h2 className="text-3xl font-bold flex items-center justify-center gap-1 mb-[10px] text-gray-700">
                    {<LiaClipboardListSolid/>} Task List
                </h2>
                {!!todoList.length && (
                    <>
                        <Filter />
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {todoList.map((todo: TodoItemType) => {
                                return <TodoItem content={todo} key={todo.id}/>
                            })}
                        </div>
                    </>
                )}
                {!!error && (
                    <ServerError message={error} />
                )}
            </div>
        </section>
    )
}