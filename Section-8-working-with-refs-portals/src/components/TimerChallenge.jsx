import { useState } from "react"

export default function TimerChallenge({title, targetTime}) {
  const [timerStarter, setTimerStarter] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  function handleTimer(){
    setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);

    setTimerStarter(true);
  }

  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p>You Lost!</p>}
      <p className="challenge-time">
        {targetTime} seccond{targetTime > 1 && 's'}
      </p>
      <p>
        <button onClick={handleTimer}>
          {timerStarter ? 'Stop' : 'Start'} Challenge
        </button>
      </p>
      <p className={timerStarter ? 'active' : undefined}>
        {timerStarter ? 'Time is running...' : 'Timer inactive'}
      </p>
    </section>
  )
}