import React from "react";

let time = null;
let sec = 0;
let hour = 0;
let min = 0;
let times = "";
class TimerClass extends React.Component {
  state = {
    timer: 0,
  };

  handleStart = () => {
    time = setInterval(() => {
      var str_hour = hour;
      var str_min = min;
      var str_sec = sec;
      if (hour < 10) {
        str_hour = "0" + hour;
      }
      if (min < 10) {
        str_min = "0" + min;
      }
      if (sec < 10) {
        str_sec = "0" + sec;
      }
      times = str_hour + ":" + str_min + ":" + str_sec + ":" + this.state.timer;
      console.log(times);
      this.setState((prev) => {
        return {
          timer: prev.timer + 50,
        };
      });
      if (this.state.timer > 999) {
        this.setState({
          timer: 0,
        });
        sec++;
      }
      if (sec > 59) {
        sec = 0;
        min++;
      }
      if (min > 59) {
        min = 0;
        hour++;
      }
    }, 50);
  };
  handleStop = () => {
    clearInterval(time);
  };
  render() {
    return (
      <div>
        <p>{times}</p>
        <button onClick={this.handleStart}>Start</button>
        <button onClick={this.handleStop}>Stop</button>
      </div>
    );
  }
}

export default TimerClass;
