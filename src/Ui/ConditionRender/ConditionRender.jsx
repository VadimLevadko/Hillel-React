function Item({ name, importance }) {
    return (
        <li className="item">
            {name} {importance > 0 && <i>{`(Важливість: ${importance})`}</i>}
        </li>
    );
}

export default function PackingList() {
    return (
        <section>
            <h1>Список речей для пакування Саллі Райд(Sally Ride)</h1>
            <ul>
                <Item
                    importance={9}
                    name="Космічний костюм"
                />
                <Item
                    importance={0}
                    name="Шолом із золотим листям"
                />
                <Item
                    importance={6}
                    name="Фото Тем О'Шонессі(Tam O'Shaughnessy)"
                />
            </ul>
        </section>
    );
}
