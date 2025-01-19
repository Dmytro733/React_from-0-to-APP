import { useState, useEffect } from "react";

const TIME = 3000;

export default function Progress() {
  const [remaningTime, setRemainingTime] = useState(TIME);

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);

    return () => {
      clearInterval(timer);
    }
  })

  return (
    <>
      <progress value={remaningTime} max={TIME}></progress>
    </>
  );
}