import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

export default function NotFound({ className }) {
    const error = useRouteError();
    return (
        <div className={className}>
            <p>{error?.message || 'Not Found'}</p>
            <Link to="/">Home</Link>
        </div>
    );
}
