import React, { useContext } from 'react'
import MyContext from '../context/Context'
import '../styles/setTime.css'

export default function SetTimeInterval() {
  const { setTotalHours, totalHours,
    setTotalMinutes, totalMinutes,
    setTotalSeconds, totalSeconds,
    timerAppears
  } = useContext(MyContext);

  const handleChange = (eve, func) => {
    const {
      target: {
        value
      }
    } = eve;
    
    func(value.padStart(2, '0'))
  }

  return (
    <section className={`setTime ${ !timerAppears && 'hidden' }`}>
      <input type="number" name="Hours" value={ totalHours }
        id="h" max='24' min='00'
        contentEditable='true'
        onChange={(event) => handleChange(event, setTotalHours)}
      />
      <input type="number" name="Minutes"
        id="m" max='59' min='00' value={ totalMinutes }
        onChange={(event) => handleChange(event, setTotalMinutes)}
      />
      <input type="number" name="Seconds"
        id="s" max='60' min='00' step='10' value={ totalSeconds }
        onChange={(event) => handleChange(event, setTotalSeconds)}
      />
    </section>
  )
}
