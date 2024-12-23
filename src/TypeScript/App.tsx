import { useReducer } from 'react';

interface State {
    count: number
}

type CounterAction =
    | { type: "reset" }
    | { type: "setCount"; value: State["count"] }

const initialState: State = { count: 0 };

function stateReducer(state: State, action: CounterAction): State {
    switch (action.type) {
        case "reset":
            return initialState;
        case "setCount":
            return { ...state, count: action.value };
        default:
            throw new Error("Невідома дія");
    }
}

export default function App() {
    const [state, dispatch] = useReducer(stateReducer, initialState);

    const addFive = () => dispatch({ type: "setCount", value: state.count + 5 });
    const reset = () => dispatch({ type: "reset" });

    return (
        <div>
            <Button />
            <h1>Ласкаво прошу до мого лічильника</h1>

            <p>Сума: {state.count}</p>
            <button onClick={addFive}>Додати 5</button>
            <button onClick={reset}>Скинути</button>
        </div>
    );
}

// -----------------------------------------------------------------------------------------

interface MyButtonProps {
    title: string;
    disabled: boolean;
}

function MyButton({ title, disabled }: MyButtonProps) {
    return (
        <button disabled={disabled}>{title}</button>
    );
}

function Button() {
    return (
        <div>
            <h1>Ласкаво прошу до мого застосунку</h1>
            <MyButton title="Неактивна кнопка" disabled={true}/>
        </div>
    );
}

