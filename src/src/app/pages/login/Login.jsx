import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';

export default function Login() {
    const navigate = useNavigate();

    const handleLogin = () => {
        localStorage.setItem('token', 'test-token')
        navigate('/profile')
    }

    return (
        <>
            <h1>Login Page</h1>
            <Button onClick={handleLogin} variant="primary">Login</Button>
        </>
    )
}