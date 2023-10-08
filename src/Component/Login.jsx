import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container } from './styledComponent/Container.style';
import { Button, P } from './styledComponent/Element.style';

export default function Login() {
    const navigate = useNavigate();
    const location = useLocation();
    const path = location.state?.pathname || '/';
    useEffect(() => {
        if (localStorage.getItem('auth') === 'true') {
            navigate(-1);
        }
    }, [navigate]);
    const handleLogin = () => {
        localStorage.setItem('auth', true);
        navigate(path);
    };
    return (
        <Container>
            <h1>Login</h1>
            <P>This is my login route</P>
            <Button type="button" onClick={handleLogin}>
                Login
            </Button>
        </Container>
    );
}
