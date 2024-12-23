import './style.css'
import { getImageUrl } from "./utils.jsx";

function Profile({ content }) {
    const { title, imgId, job, medals, open } = content;

    const countOfMedals = medals.split(",").length;

    return (
        <section className="profile">
            <h2>{title}</h2>
            <img
                className="avatar"
                src={getImageUrl(`${imgId}`)}
                alt={title}
                width={70}
                height={70}
            />
            <ul>
                <li>
                    <b>Професія: </b>
                    {job}
                </li>
                <li>
                    <b>Нагороди: {countOfMedals} </b>
                    {medals}
                </li>
                <li>
                    <b>Відкрито: </b>
                    {open}
                </li>
            </ul>
        </section>
    );
}

export default function Gallery() {
    return (
        <div>
            <h1>Визначні вчені</h1>
            <Profile
                content={{
                    title: "Марія Склодовська-Кюрі (Maria Skłodowska-Curie",
                    imgId: "szV5sdG",
                    job: "фізик та хімік",
                    medals:
                        "(Нобелівська премія з фізики, Нобелівська премія з хімії, Медаль Дейві, Медаль Маттеуччі)",
                    open: "полоній (хімічний елемент)",
                }}
            />
            <Profile
                content={{
                    title: "Кацуко Сарухаші (Katsuko Saruhashi)",
                    imgId: "YfeOqp2",
                    job: "геохімік",
                    medals: "(Премія Міяке з геохімії, Премія Танака)",
                    open: "метод вимірювання вмісту діоксиду карбону в морській воді",
                }}
            />
        </div>
    );
}
