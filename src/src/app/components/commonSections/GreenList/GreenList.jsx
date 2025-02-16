export default function GreenList({ list }) {
    return (
        <ul className="fs-5 m-0" style={{color: 'lawngreen'}}>
            {list.map(function (item, index) {
                return (
                    <li key={index}><span style={{color: '#000'}}>{item}</span></li>
                )
            })}
        </ul>
    )
}