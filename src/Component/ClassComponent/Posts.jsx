import React from "react";
import Post from "./Post";

export default class Posts extends React.Component {
  state = { isLoading: false, isError: false, posts: [] };
  style = {
    postsContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: 'wrap'
    },
  };
  componentDidMount() {
    this.setState({
      loading: true,
    });
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          loading: false,
          posts: data,
        })
      )
      .catch(() => {
        this.setState({
          isError: true,
          isLoading: false,
        });
      });
  }
  render() {
    const { isLoading, isError, posts } = this.state;
    const { postsContainer } = this.style;
    let content = null;
    if (isLoading && !isError) content = <p>Loading...</p>;
    else if (!isLoading && isError) content = <p>Something was wrong</p>;
    else if (!isLoading && !isError && posts.length === 0)
      content = <p>Not Found</p>;
    else if (!isLoading && !isError && posts.length > 0) {
      content = posts.map((post) => <Post key={post.id} post={post} />);
    }
    return <div style={postsContainer}>{content}</div>;
  }
}
