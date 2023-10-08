import React from 'react';
import { NavLink } from 'react-router-dom';

export default function CustomLink({ className = '', children, ...props }) {
    return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <NavLink {...props} className={({ isActive }) => (isActive ? className : '')}>
            {children}
        </NavLink>
    );
}
