import { useState } from 'react';

export default function TrafficLight() {
    const [walk, setWalk] = useState(true);

    function handleClick() {
        alert(walk ? 'Далі буде стійте!' : 'Далі буде йдіть!')
        setWalk(!walk);
    }

    return (
        <>
            <button onClick={handleClick}>
                Змінити на {walk ? 'Стійте' : 'Йдіть'}
            </button>
            <h1 style={{
                color: walk ? 'darkgreen' : 'darkred'
            }}>
                {walk ? 'Йдіть' : 'Стійте'}
            </h1>
        </>
    );
}
