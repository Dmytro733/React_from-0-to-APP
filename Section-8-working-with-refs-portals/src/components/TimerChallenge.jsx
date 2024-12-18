import { useState, useRef } from "react"
import ResultModal from "./ResultModal";

export default function TimerChallenge({title, targetTime}) {
  const [timerStarter, setTimerStarter] = useState(false);
  const timer = useRef();
  const dialog = useRef();

  function handleStartTimer(){
    timer.current = setTimeout(() => {
      dialog.current.open();
    }, targetTime * 1000);

    setTimerStarter(true);
  }

  function handleStopTimer(){
    clearTimeout(timer.current);
  }

  return (
    <>
      <ResultModal ref={dialog} result="Lost" targetTimer={targetTime} />

      <section className="challenge">
        <h2>{title}</h2>
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
    </>
  )
}