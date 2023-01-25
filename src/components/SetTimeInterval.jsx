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
      <div>
        <button>-</button>
        <p>{ totalHours }</p>
        <button>+</button>
      </div>
      <div>
        <button>-</button>
        <p>{ totalMinutes }</p>
        <button>+</button>
      </div>
      <div>
        <button>-</button>
        <p>{ totalSeconds }</p>
        <button>+</button>
      </div>
    </section>
  )
}
