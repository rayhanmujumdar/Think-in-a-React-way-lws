import React from "react";
import "./App.css";
import Posts from "./Component/FunctionalComponent/Posts";
import Route from "./Component/route/Route";
import Routing from "./context/Routing";
import PostDetails from "./Component/ClassComponent/PostDetails";
class App extends React.Component {
  state = { pathname: null, id: null };
  componentDidMount() {
    const { pathname } = this.state;
    if (pathname === null) {
      const hrefSeparate = location.pathname.split("/");
      if (hrefSeparate.length === 3) {
        this.setState({
          pathname: pathname,
          id: hrefSeparate[2],
        });
      }
      this.setState({
        pathname: pathname,
      });
    }
  }
  render() {
    const { id } = this.state;
    return (
      <>
        <Routing.Provider
          value={{
            updateRoute: this.setState.bind(this),
            routeInfo: this.state,
          }}
        >
          <Route path="/" component={<Posts />}></Route>
          <Route path={`/post/${id}`} component={<PostDetails />}></Route>
        </Routing.Provider>
      </>
    );
  }
}

export default App;
