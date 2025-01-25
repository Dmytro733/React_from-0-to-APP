import { useState, useEffect } from "react";

export default function QuestionTimer({timeout, onTimeout}) {
  const [ramainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    setTimeout(onTimeout, timeout)
  }, [timeout, onTimeout]);

  useEffect(() => {
    setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 10);
    }, 10)
  }, [])

  return <progress id="question-time" max={timeout} value={ramainingTime} />
}