# React Hooks

### Date: 27/08/23

outline:

- React Class Component
    
    **React Class Component problems:** 
    
    - Complex States → X
    - Lifecycle Methods → X
    - Sharing Same logic → X
    - Duplicate Code → X
    
    Class Component Code Example:
    
    ```jsx
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
    ```
    
- React Functional Component
    
    **Functional Component Benefit and what’s problem solving:**
    
    - Complex States → ✔️
    - Lifecycle Methods → ✔️
    - Sharing Same logic → ✔️
    - Duplicate Code → ✔️
    
    **Functional Component code Example:**
    
    ```jsx
    import { useEffect, useState } from "react";
    import Post from "./Post";
    export default function Posts() {
    // The useState hook helps to manage state problems within components.
      const [posts, setPosts] = useState([]);
      const [isLoading, setIsLoading] = useState(false);
      const [isError, setIsError] = useState(false);
      const [error, setError] = useState({});
    // An alternative to the componentDidMount method is the useEffect hook. By using this hook, all side effect problems can be solved.
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
    ```
    
1. Hook Only used for Functional component
2. Feb 16,2019 → React Hooks introduced → v16.8

## Some Point to Note

- Hooks are available from React Version 16.8 +
- Hook don’t Contain any breaking changes & it 100% backward compatible
- Hooks are optional & classes won’t be removed from React
- Hooks can’t be used inside class component.
- Hooks don’t replace your existing React knowledge. it just provides a more direct api to the React concepts you already know

### Class Component vs Function Component  Compare:

**Class Component:**

```jsx
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
```

**Functional Components:**