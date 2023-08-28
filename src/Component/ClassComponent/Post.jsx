import React from "react";
import Link from "../route/Link";
export default class Post extends React.Component {
  // style
  style = {
    postContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "right",
      flexDirection: "column",
      gap: "10px",
      width: "400px",
      margin: "20px",
      backgroundColor: "gray",
      padding: "10px",
    },
    postRoute: { textDecoration: "none", color: "white", cursor: "pointer" },
  };
  render() {
    // eslint-disable-next-line react/prop-types
    const { post } = this.props;
    // eslint-disable-next-line react/prop-types
    const { title, body, id } = post;
    const { postContainer, postRoute } = this.style;

    return (
      <div style={postContainer}>
        <Link
          onClick={(e) => e.preventDefault()}
          href={`/post/${id}`}
          style={postRoute}
        >
          <strong>{id}</strong>
          <h4>{title}</h4>
          <p>{body}</p>
        </Link>
      </div>
    );
  }
}
