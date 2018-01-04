import React from "react";
import { Component } from "react";

export default class PomodoroTimer extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.minutes}:
        {this.props.seconds}
      </div>
    );
  }
}
