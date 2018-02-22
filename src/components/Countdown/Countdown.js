import React from "react";
import { Component } from "react";

export default class PomodoroTimer extends Component {
  renderTime() {
    const { seconds, minutes } = this.props;
    return (
      <div>
        {minutes}:
        {seconds}
      </div>
    );
  }
  render() {
    const { seconds, minutes } = this.props;
    return minutes || seconds ? this.renderTime() : null;
  }
}
