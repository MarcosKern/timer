import React, { useContext, useState } from 'react'
import MyContext from '../context/Context';
import '../styles/start.css'

const ONE_SEC = 1000;

export default function StartButton() {
  const {
    setTimerAppears, timerAppears,
    totalHours, setTotalHours,
    totalMinutes, setTotalMinutes,
    totalSeconds, setTotalSeconds
  } = useContext(MyContext);
  const [ timerId, setTimerId ] = useState(0)

  let secs = Number(totalSeconds);
  let mins = Number(totalMinutes);
  let hrs = Number(totalHours);

  const handleClick = () => {
    setTimerAppears(!timerAppears);
    const timer = setInterval(() => {
      setTimerId(timer)
      if (secs === 0 && mins === 0 && hrs > 0) {
        secs = 60;
        mins = 59;
        hrs--;
        setTotalMinutes((mins).toString().padStart(2, '0'))
        setTotalHours((hrs).toString().padStart(2, '0'))
      }
      if (secs === 0 && mins > 0) {
        secs = 60;
        mins--;
        setTotalMinutes((mins).toString().padStart(2, '0'))
      }
      secs--
      if (secs >= 0) {
        setTotalSeconds((secs).toString().padStart(2, '0'))
      }
      console.log(`${hrs}:${mins}:${secs}`)
      
      if (
        hrs === 0
        && mins === 0
        && secs <= 0
      ) {
          clearInterval(timer)
          setTimerAppears(true)
          return
      }
    }, ONE_SEC);
  }

  const handleStop = () => {
    setTimerAppears(!timerAppears)
    clearInterval(timerId)
  }

  return (
    <button className={ timerAppears ? 'startBtn' : 'stopBtn' }
      onClick={ timerAppears ? handleClick : handleStop }
    >
      {
        timerAppears ? 'START' : 'STOP'
      }
    </button>
  )
}
