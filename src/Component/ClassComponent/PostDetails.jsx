import React from "react";
import Routing from "../../context/Routing";
import Post from "./Post";
export default class PostDetails extends React.Component {
  state = { post: {} };
  componentDidMount() {
    const { routeInfo } = this.context;
    const { id } = routeInfo;
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          post: data,
        })
      );
  }
  render() {
    const { post } = this.state;
    return <Post post={post}></Post>;
  }
}

PostDetails.contextType = Routing;
