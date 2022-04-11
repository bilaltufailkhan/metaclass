// @ts-nocheck

import { useEffect, useState } from "react";
import { UseTokenContract } from "../hooks";

let lastRebasedTime = 0;
export async function getLastRebasedTime(): Promise<number> {
  const tokenContract = UseTokenContract();
  lastRebasedTime = await tokenContract._lastRebasedTime();
  return lastRebasedTime;
}

const useCountdown = () => {
  const [countDown, setCountDown] = useState<number>(900000);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(
        9 * Math.pow(10, 5) -
          ((Date.now() - lastRebasedTime) % (9 * Math.pow(10, 5)))
      );
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [countDown]);
  return getReturnValues(countDown);
};

const getReturnValues = (countDown: number) => {
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = String(
    Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60))
  );
  if (Number(minutes) < 10) {
    minutes = `0${minutes}`;
  }
  let seconds = String(Math.floor((countDown % (1000 * 60)) / 1000));
  if (Number(seconds) < 10) {
    seconds = `0${seconds}`;
  }

  return [days, hours, minutes, seconds];
};

export { useCountdown };
