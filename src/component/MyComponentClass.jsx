import React from "react";
export default class MyComponentClass extends React.Component {
  state = {
    count: 0,
    date: new Date(),
  };
  addClick() {
    this.setState((prev) => ({
      count: prev.count + 1,
    }));
  }
  componentDidMount() {
    const { count } = this.state;
    document.title = `Clicked ${count} times`;
    this.timer = setInterval(this.tick.bind(this), 1000);
  }
  componentDidUpdate() {
    const { count } = this.state;
    document.title = `Clicked ${count} times`;
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  tick() {
    this.setState({
      date: new Date(),
    });
  }
  render() {
    const { date } = this.state;
    return (
      <div>
        <p>Time: {date.toLocaleTimeString("bn")}</p>
        <p>
          <button type="button" onClick={this.addClick.bind(this)}>
            Click
          </button>
        </p>
      </div>
    );
  }
}
