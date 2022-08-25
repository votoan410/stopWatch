import react, { useRef, useState } from "react";

let time = null;
let sec = 0;
let hour = 0;
let min = 0;
let times = "";
const TimerFn = () => {
  const [timer, setTimer] = useState(0);
  const timeRef = useRef(timer);
  timeRef.current = timer;

  const handleStart = () => {
    time = setInterval(() => {
      let str_hour = hour;
      let str_min = min;
      let str_sec = sec;
      if (hour < 10) {
        str_hour = "0" + hour;
      }
      if (min < 10) {
        str_min = "0" + min;
      }
      if (sec < 10) {
        str_sec = "0" + sec;
      }
      times = str_hour + ":" + str_min + ":" + str_sec + ":" + timeRef.current;
      setTimer((prev) => prev + 50);

      // reset
      if (timeRef.current > 999) {
        setTimer(0);
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
  const handleStop = () => {
    clearInterval(time);
  };

  return (
    <div>
      <p>{times}</p>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
};

export default TimerFn;
