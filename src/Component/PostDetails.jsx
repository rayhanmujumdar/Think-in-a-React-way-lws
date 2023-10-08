import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BackButton from './UI/BackButton';
import { PostContainer } from './styledComponent/Container.style';
import { P } from './styledComponent/Element.style';

export default function PostDetails() {
    const { post } = useLoaderData();
    const { id, title } = post;

    return (
        <PostContainer>
            <P>{id}</P>
            <P>{title}</P>
            <BackButton />
        </PostContainer>
    );
}
