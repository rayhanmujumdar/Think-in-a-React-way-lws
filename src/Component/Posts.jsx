import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from './Post';
import BackButton from './UI/BackButton';

export default function Posts() {
    const { posts } = useLoaderData();
    let content = null;
    if (posts.length === 0) {
        content = <p>Loading...</p>;
    } else {
        content = posts.map((post) => <Post key={post.id} post={post} />);
    }
    return (
        <div>
            <BackButton />
            {content}
        </div>
    );
}
