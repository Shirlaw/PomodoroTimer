import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import Countdown from "../Countdown/Countdown";
import List from "../List/List";

import calculateMinutesAndSeconds from "../../services/calculateMinutesAndSeconds";
import { deleteItem } from "../../actions/actions";
// const secondsInTwentyFiveMinutes = 1500;
const secondsInTwentyFiveMinutes = 3;

class PomodoroTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSeconds: null,
      pomodoros: 0,
      started: false,
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
    let { minutes, seconds } = calculateMinutesAndSeconds(currentSeconds);

    this.setState(prevState => ({
      currentSeconds: prevState.currentSeconds - 1,
      seconds,
      minutes,
      started: true,
    }));
  }

  render() {
    let { minutes, seconds, started } = this.state;
    let { list } = this.props;
    return (
      <div id="pomodoroTimer">
        <input type="text" />
        <Countdown minutes={minutes} seconds={seconds} />
        <button onClick={this.startTimer}>{started ? "Restart" : "Start"} </button>
        <List items={list} deleteItem={this.props.onDeleteItem} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    list: state.get("list"),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDeleteItem: id => {
      dispatch(deleteItem(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PomodoroTimer);
