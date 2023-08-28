import React from "react";
import Routing from "../../context/Routing";
export default class Link extends React.Component {
  handleUrl = (href) => {
    window.history.pushState(null, null, href);
    const { updateRoute } = this.context;
    const hrefSeparate = href.split("/");
    if (hrefSeparate.length === 3) {
      updateRoute({
        pathname: href,
        id: hrefSeparate[2],
      });
    }
    updateRoute({
      pathname: href,
    });
  };
  render() {
    // eslint-disable-next-line react/prop-types
    const { children, href, ...props } = this.props;
    return (
      <div {...props} onClick={() => this.handleUrl(href)}>
        {children}
      </div>
    );
  }
}

Link.contextType = Routing;
