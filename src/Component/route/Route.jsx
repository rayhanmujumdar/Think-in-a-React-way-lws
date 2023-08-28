import React from "react";

export default class Route extends React.Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { component, path } = this.props;
    if (path === location.pathname) {
      return component;
    }
  }
}
