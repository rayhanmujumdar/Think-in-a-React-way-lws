import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import navStyle from '../assets/css/nav.module.css';
import CustomLink from './UI/CustomLink';
import { NavContainer } from './styledComponent/Container.style';
import { LI, UL } from './styledComponent/Element.style';

export default function Nav() {
    const [logout, setLogOut] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        if (logout) {
            navigate('/login', { state: location });
            localStorage.setItem('auth', false);
        }
    }, [logout, navigate, location]);
    return (
        <NavContainer>
            <UL>
                <LI>
                    <CustomLink to="/" className={navStyle.active}>
                        Home
                    </CustomLink>
                </LI>
                <LI>
                    <CustomLink to="/blog" className={navStyle.active}>
                        Blog
                    </CustomLink>
                </LI>
                <LI>
                    <CustomLink to="/about" className={navStyle.active}>
                        About
                    </CustomLink>
                </LI>
                <LI>
                    <CustomLink to="/posts" className={navStyle.active}>
                        Post
                    </CustomLink>
                </LI>
                {!logout && <LI onClick={() => setLogOut(true)}>Log out</LI>}
            </UL>
        </NavContainer>
    );
}
