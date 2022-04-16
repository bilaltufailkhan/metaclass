import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { calculateTimeLeft } from "../hooks/calculateTimer";
const STATUS = {
  STARTED: "Started",
  STOPPED: "Stopped",
};

const INITIAL_COUNT = 57600 + 1560 + 60;

const Timer = () => {
  const [secondsRemaining, setSecondsRemaining] = useState(INITIAL_COUNT);
  const [status, setStatus] = useState(STATUS.STARTED);

  const secondsToDisplay = secondsRemaining % 60;

  const minutesRemaining = (secondsRemaining - secondsToDisplay) / 60;
  const minutesToDisplay = minutesRemaining % 60;

  const hoursRemaining = (minutesRemaining - minutesToDisplay) / 60;
  const hoursToDisplay = hoursRemaining % 60;

  const handleStart = () => {
    setStatus(STATUS.STARTED);
  };
  const handleStop = () => {
    setStatus(STATUS.STOPPED);
  };
  const handleReset = () => {
    setStatus(STATUS.STOPPED);
    setSecondsRemaining(INITIAL_COUNT);
  };
  useInterval(
    () => {
      if (secondsRemaining > 0) {
        setSecondsRemaining(secondsRemaining - 1);
      } else {
        setStatus(STATUS.STOPPED);
      }
    },
    status === STATUS.STARTED ? 1000 : null
    // passing null stops the interval
  );

  function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  // https://stackoverflow.com/a/2998874/1673761
  const twoDigits = (num) => String(num).padStart(2, "0");

  return (
    <div className="">
      <div className="text-center timer py-2 text-white font-weight-bold">
        Start Sale{" "}
        {twoDigits(hoursToDisplay) +
          ":" +
          twoDigits(minutesToDisplay) +
          ":" +
          twoDigits(secondsToDisplay)}
        <a
          href="https://www.pinksale.finance/#/launchpad/0x7AD30e896C88243200023d3A3ACc43A5983931cd?chain=BSC"
          target="_blank"
          className="joinNow__btn btn mx-4 font-weight-bold"
        >
          Join Now
        </a>
      </div>
    </div>
  );
};

export default Timer;
