import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { calculateTimeLeft } from "../hooks/calculateTimer";
import { useCountdown } from "../utils/timer";

const Timer = () => {
  const rebaseTime = useCountdown();

  return (
    <div className="">
      <div className="text-center timer py-2 text-white font-weight-bold">
        Fair Launch is Live!
        {/* {`${rebaseTime[1]}:${rebaseTime[2]}:${rebaseTime[3]}`} */}
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
