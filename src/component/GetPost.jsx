import { useEffect, useReducer } from "react";

const initialValue = {
  loading: true,
  error: "",
  post: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SUCCESS":
      return {
        ...state,
        loading: false,
        post: action.payload,
      };
    case "ERROR":
      return {
        ...state,
        error: action.payload,
        loading: false,
        post: {},
      };

    default:
      return state;
  }
};
export default function GetPost() {
  const [state, dispatch] = useReducer(reducer, initialValue);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        return response.json();
      })
      .then((post) => {
        dispatch({ type: "SUCCESS", payload: post });
      })
      .catch((err) => {
        dispatch({ type: "ERROR", payload: err.message });
      });
  }, []);
  return (
    <div>
      {state.loading ? "Loading" : state.post.title}
      {state.error ? state.error : null}
    </div>
  );
}
