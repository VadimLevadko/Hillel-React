import { useState } from "react";

const products = [
    { title: 'Капуста', isFruit: false, id: 1 },
    { title: 'Часник', isFruit: false, id: 2 },
    { title: 'Яблуко', isFruit: true, id: 3 },
];

export default function ShoppingList() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    const listItems = products.map(product =>
        <li
            key={product.id}
            style={{
                color: product.isFruit ? 'purple' : 'green'
            }}
        >
            {product.title}
        </li>
    );

    return (
        <>
            <ul>{listItems}</ul>
            <MyButton count={count} onClick={handleClick} />
            <MyButton count={count} onClick={handleClick} />
        </>
    );
}

function MyButton({ count, onClick }) {
    return (
        <button onClick={onClick}>
            Натиснуто {count} разів
        </button>
    );
}