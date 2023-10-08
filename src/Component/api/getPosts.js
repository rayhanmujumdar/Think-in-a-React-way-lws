const getPosts = async (url) => {
    const response = await fetch(url);
    const posts = await response.json();
    return posts;
};
export default getPosts;
