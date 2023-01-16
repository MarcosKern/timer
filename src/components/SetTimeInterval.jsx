import React, { useContext } from 'react'
import MyContext from '../context/Context'
import '../styles/setTime.css'

export default function SetTimeInterval() {
  const { setTotalHours, totalHours,
    setTotalMinutes, totalMinutes,
    setTotalSeconds, totalSeconds,
    timerAppears
  } = useContext(MyContext);

  const handleChange = (eve, func, newCase) => {
    const {
      target: {
        value
      }
    } = eve;
    const newValue = Number(value);
    if (Number.isInteger(newValue)) {
      console.log('oi')
      switch (newCase) {
        case 'hour':
          if (newValue <= 24 && newValue >= 0) {
            return func(String(newValue).padStart(2, '0'))
          } else break;
        case 'minutes':
          if (newValue <= 59 && newValue >= 0) {
            return func(String(newValue).padStart(2, '0'))
          } else break;
        case 'seconds':
          if (newValue <= 60 && newValue >= 0) {
            return func(String(newValue).padStart(2, '0'))
          } else break;
        default: break;
      }
    }
  }

  return (
    <section className={`setTime ${ !timerAppears && 'hidden' }`}>
      <input type="number" name="Hours" value={ totalHours }
        id="h" max='24' min='00' readOnly={ !timerAppears }
        onChange={(event) => handleChange(event, setTotalHours, 'hour')}
      />
      <input type="number" name="Minutes" readOnly={ !timerAppears }
        id="m" max='59' min='00' value={ totalMinutes }
        onChange={(event) => handleChange(event, setTotalMinutes, 'minutes')}
      />
      <input type="number" name="Seconds" readOnly={ !timerAppears }
        id="s" max='60' min='00' step='10' value={ totalSeconds }
        onChange={(event) => handleChange(event, setTotalSeconds,'seconds')}
      />
    </section>
  )
}
