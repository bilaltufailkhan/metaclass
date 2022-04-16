import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { calculateTimeLeft } from "../hooks/calculateTimer";

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {" : "}
        {timeLeft[interval]}
      </span>
    );
  });
  return (
    <div className="text-center timer py-2 text-white font-weight-bold">
      Start Sale{" "}
      {timerComponents.length ? timerComponents : <span>Time's up!</span>}
      <a
        href="https://www.pinksale.finance/#/launchpad/0x7AD30e896C88243200023d3A3ACc43A5983931cd?chain=BSC"
        target="_blank"
        className="joinNow__btn btn mx-4 font-weight-bold"
      >
        Join Now
      </a>
    </div>
  );
};

export default Timer;
