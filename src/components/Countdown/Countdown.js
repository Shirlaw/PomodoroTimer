import React from "react";
import { Component } from "react";

export default class PomodoroTimer extends Component {
  render() {
    const { seconds, minutes } = this.props;
    if (minutes || seconds) {
      return (
        <div>
          {minutes}:
          {seconds}
        </div>
      );
    } else {
      return null;
    }
  }
}
