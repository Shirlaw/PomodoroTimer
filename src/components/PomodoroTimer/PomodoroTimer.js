import React from "react";
import { Component } from "react";
import Countdown from "../Countdown/Countdown";

// const secondsInTwentyFiveMinutes = 1500;
const secondsInTwentyFiveMinutes = 3;

export default class PomodoroTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSeconds: null,
      pomodoros: 0,
      started: false
    };
  }
  startTimer = () => {
    this.setState({ currentSeconds: secondsInTwentyFiveMinutes });
    if (this.timer) clearInterval(this.timer);
    this.timer = setInterval(() => {
      if (this.state.currentSeconds >= 0) {
        this.incrementTimer();
      } else {
        this.resetTimer();
      }
    }, 1000);
  };

  resetTimer() {
    clearInterval(this.timer);
    this.setState({ started: false, mintues: null, seconds: null });
  }

  incrementTimer() {
    let { currentSeconds } = this.state;
    let minutes = Math.floor(currentSeconds / 60);
    let seconds = currentSeconds - minutes * 60;
    if (`${seconds}`.length == 1) seconds = `0${seconds}`;

    this.setState(prevState => ({
      currentSeconds: prevState.currentSeconds - 1,
      seconds,
      minutes,
      started: true
    }));
  }

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
