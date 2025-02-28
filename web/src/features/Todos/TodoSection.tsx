import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { selectUsers, loadTodos, createTodo } from './todos-slice'

export default function TodoSection() {
    const dispatch = useDispatch<any>();
    const users = useSelector(selectUsers);
    const { entities: test, loading, error } = users || {};

    useEffect(() => {
        dispatch(loadTodos())
    }, []);

    const handleTest = () => {
        // @ts-ignore
        dispatch(createTodo('Hello World'))
    }

    if(loading === 'loading') {
        return <h1>Loading...</h1>
    }

    return (
        <>
            {test.map((item) => {
                return (
                    <h1 onClick={handleTest} key={item.id}>{item.title}</h1>
                )
            })}
        </>
    )
}