import Nav from 'react-bootstrap/Nav';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();

    const token = localStorage.getItem('token');
    const [isTokenExists, setIsTokenExists] = useState(!!token);

    useEffect(() => {
        if (token) {
            setIsTokenExists(true);
        } else {
            setIsTokenExists(false);
        }
    }, [token])

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsTokenExists(false);
        navigate('/login');
    }

    return (
        <Nav className="fs-2" justify variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
                <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/blog" eventKey="link-1">Our Blog</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                {isTokenExists ?
                    (
                        <Nav.Link onClick={handleLogout} className="bg-danger bg-gradient" eventKey="link-2">Logout</Nav.Link>
                    ) : (
                        <Nav.Link href="/login" eventKey="link-3">Login</Nav.Link>
                    )
                }
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/profile">
                    Profile
                </Nav.Link>
            </Nav.Item>
        </Nav>
    )
}