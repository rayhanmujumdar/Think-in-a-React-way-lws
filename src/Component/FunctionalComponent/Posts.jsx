import { useEffect, useState } from "react";
import Post from "./Post";
export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState({});
  useEffect(() => {
    setIsLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsError(true);
        setError(err);
      });
  }, []);
  let content = null;
  if (isLoading && !isError) {
    content = <p>Loading...</p>;
  } else if (!isLoading && isError) {
    content = <p>Something was wrong</p>;
  } else if (!isLoading && !isError && posts.length === 0) {
    content = <p>{error.message}</p>;
  } else if (!isLoading && !isError && posts.length > 0) {
    content = posts.map((post) => <Post key={post.id} post={post} />);
  }
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {content}
    </div>
  );
}
