import getPosts from '../api/getPosts';

export const postsLoader = async () => {
    const posts = await getPosts('https://jsonplaceholder.typicode.com/posts');
    return { posts };
};

export const postLoader = async ({ params }) => {
    const post = await getPosts(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
    return { post };
};
