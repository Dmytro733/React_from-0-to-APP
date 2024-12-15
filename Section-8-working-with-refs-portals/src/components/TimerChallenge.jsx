import { useState, useRef } from "react"

export default function TimerChallenge({title, targetTime}) {
  const [timerStarter, setTimerStarter] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);
  const timer = useRef();

  function handleStartTimer(){
    timer.current = setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);

    setTimerStarter(true);
  }

  function handleStopTimer(){
    clearTimeout(timer.current);
  }

  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p>You Lost!</p>}
      <p className="challenge-time">
        {targetTime} seccond{targetTime > 1 && 's'}
      </p>
      <p>
        <button onClick={timerStarter ? handleStopTimer : handleStartTimer}>
          {timerStarter ? 'Stop' : 'Start'} Challenge
        </button>
      </p>
      <p className={timerStarter ? 'active' : undefined}>
        {timerStarter ? 'Time is running...' : 'Timer inactive'}
      </p>
    </section>
  )
}