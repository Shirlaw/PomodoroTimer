import React from "react";
import { Component } from "react";
import Countdown from "../Countdown/Countdown";

const secondsInTwentyFiveMinute = 1500;

export default class PomodoroTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: undefined
    };
  }
  startTimer = () => {
    let currentSeconds = secondsInTwentyFiveMinute;
    if (this.timer) clearInterval(this.timer);
    this.timer = setInterval(() => {
      if (currentSeconds > 0) {
        let minutes = Math.floor(currentSeconds / 60);
        let seconds = currentSeconds - minutes * 60;
        if (`${seconds}`.length == 1) seconds = `0${seconds}`;

        this.setState({ seconds, minutes });

        currentSeconds = currentSeconds - 1;
      } else {
        clearInterval(this.timer);
      }
    }, 1000);
  };
  render() {
    return (
      <div id="pomodoroTimer">
        <Countdown minutes={this.state.minutes} seconds={this.state.seconds} />
        <button onClick={this.startTimer}> Start </button>
      </div>
    );
  }
}
