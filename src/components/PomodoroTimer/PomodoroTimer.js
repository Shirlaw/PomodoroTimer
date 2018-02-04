import React from "react";
import { Component } from "react";
import Countdown from "../Countdown/Countdown";

// const secondsInTwentyFiveMinutes = 1500;
const secondsInTwentyFiveMinutes = 3;

export default class PomodoroTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pomodoros: 0,
      started: false
    };
  }
  startTimer = () => {
    let currentSeconds = secondsInTwentyFiveMinutes;
    if (this.timer) clearInterval(this.timer);
    this.timer = setInterval(() => {
      if (currentSeconds >= 0) {
        let minutes = Math.floor(currentSeconds / 60);
        let seconds = currentSeconds - minutes * 60;
        if (`${seconds}`.length == 1) seconds = `0${seconds}`;
        this.setState({ seconds, minutes, started: true });
        currentSeconds = currentSeconds - 1;
      } else {
        clearInterval(this.timer);
        this.setState({ started: false, mintues: null, seconds: null });
      }
    }, 1000);
  };
  render() {
    let { minutes, seconds, started } = this.state;
    return (
      <div id="pomodoroTimer">
        <Countdown minutes={minutes} seconds={seconds} />
        <button onClick={this.startTimer}>
          {started ? "Restart" : "Start"}{" "}
        </button>
      </div>
    );
  }
}
