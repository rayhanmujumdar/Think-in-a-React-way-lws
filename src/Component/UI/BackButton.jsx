import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../styledComponent/Element.style';

export default function BackButton() {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(-1);
    };
    return <Button onClick={handleNavigate}>Get Back</Button>;
}
