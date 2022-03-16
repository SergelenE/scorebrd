import React from "react";

class Stopwatch extends React.Component {
  state = {
    isRunning: false,
    time: 0,
  };

  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
  }

  tick = () => {
    if (this.state.isRunning) {
      this.setState((prevState) => ({
        time: (prevState.time += 1),
      }));
    }
  };

  handleStopwatch = () => {
    this.setState((prevState) => ({
      isRunning: !prevState.isRunning,
    }));
    console.log(this.state.isRunning);
  };

  resetwatch = () => {
    this.setState({
      time: 0,
      isRunning: false,
    });
  };

  render() {
    return (
      <div className="stopwatch">
        <h2>Stopwatch</h2>
        <span className="stopwatch-time">{this.state.time}</span>
        <button onClick={this.handleStopwatch}>
          {this.state.isRunning ? "Stop" : "Start"}
        </button>
        <button onClick={this.resetwatch}>Reset</button>
      </div>
    );
  }
}

export default Stopwatch;
