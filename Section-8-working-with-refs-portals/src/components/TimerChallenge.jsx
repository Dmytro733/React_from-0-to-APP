import { useState, useRef } from "react"
import ResultModal from "./ResultModal";

export default function TimerChallenge({title, targetTime}) {
  const [remainingTime, setRemainingTime] = useState(targetTime * 1000);

  const timer = useRef();
  const dialog = useRef();
  const timerIsActive = remainingTime > 0 && remainingTime < targetTime * 1000;

  if(remainingTime <= 0){
    clearInterval(timer.current);
    dialog.current.open();
  }

  function handleStartTimer(){
    timer.current = setInterval(() => {
      setRemainingTime((prevTimeRemaining => prevTimeRemaining - 10));
    }, 10);
  }

  function handleResetTimer(){
    setRemainingTime(targetTime * 1000);
  }

  function handleStopTimer(){
    clearInterval(timer.current);
    dialog.current.open();
  }

  return (
    <>
      <ResultModal 
        ref={dialog} 
        targetTimer={targetTime} 
        timeRemaining={remainingTime}
        onReset={handleResetTimer}
      />

      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} seccond{targetTime > 1 && 's'}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStopTimer : handleStartTimer}>
            {timerIsActive ? 'Stop' : 'Start'} Challenge
          </button>
        </p>
        <p className={timerIsActive ? 'active' : undefined}>
          {timerIsActive ? 'Time is running...' : 'Timer inactive'}
        </p>
      </section>
    </>
  )
}