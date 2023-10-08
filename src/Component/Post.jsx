import React from 'react';
import { Link } from 'react-router-dom';
import { P } from './styledComponent/Element.style';

export default function Post({ post }) {
    const { id, title } = post;
    return (
        <div>
            <Link to={`/post/${id}`}>
                <P>{id}</P>
                <P>{title}</P>
            </Link>
        </div>
    );
}
