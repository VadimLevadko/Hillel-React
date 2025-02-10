import { useNavigate } from "react-router-dom";

import Button from "react-bootstrap/Button";

export default function Home() {
    const navigate = useNavigate();

    const handleNavigateToBlog = () => {
        navigate("/blog");
    }

    return (
        <>
            <h1>Home Page</h1>
            <Button onClick={handleNavigateToBlog} variant="primary">Check our blog page!</Button>
        </>
    )
}