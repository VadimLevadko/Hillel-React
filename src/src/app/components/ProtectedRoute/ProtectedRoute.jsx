import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
    const [isAuth, setIsAuth] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const isUserLogin = localStorage.getItem('token');

        if(isUserLogin) {
            setIsAuth(true);
        }
        setLoading(false);
    }, [])

    if(loading) {
        return <div>Loading...</div>
    }

    if(!isAuth) return <Navigate to="/login" replace />

    return children
}