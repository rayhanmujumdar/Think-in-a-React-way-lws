import React from "react";
export default class Time extends React.Component {
  state = { date: new Date() };
  intervalRef = React.createRef()
  tick = () => {
    this.setState({
      date: new Date(),
    });
  };
  componentDidMount() {
    this.intervalRef.current = setInterval(this.tick, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    const { date } = this.state;
    return (
      <div>
        <p>{date.toLocaleTimeString()}</p>
        <p>
          <button type="button" onClick={() => clearInterval(this.intervalRef.current)}>
            CleanUp
          </button>
        </p>
      </div>
    );
  }
}
