import React, { useContext } from 'react'
import MyContext from '../context/Context'
import '../styles/setTime.css'

export default function SetTimeInterval() {
  const {
    setTotalHours,
    totalHours,
    setTotalMinutes,
    totalMinutes,
    setTotalSeconds,
    totalSeconds,
    timerAppears,
  } = useContext(MyContext)

  const decrement = (func, value, quantity) => {
    if (value > 0) {
      const updatedValue = Number(value) - quantity
      func(updatedValue.toString().padStart(2, '0'))
    }
    return
  }

  const increment = (func, value, quantity, limit) => {
    if (value < limit) {
      const updatedValue = Number(value) + quantity
      func(updatedValue.toString().padStart(2, '0'))
    }
    return
  }

  return (
    <section className={`setTime ${!timerAppears && 'hidden'}`}>
      <div>
        <button className='decrement' onClick={ () => decrement(setTotalHours, totalHours, 1) }>-</button>
        <p>{totalHours}</p>
        <button className='increment' onClick={ () => increment(setTotalHours, totalHours, 1, 24) }>+</button>
      </div>
      <div>
        <button className='decrement' onClick={ () => decrement(setTotalMinutes, totalMinutes, 1) }>-</button>
        <p>{totalMinutes}</p>
        <button className='increment' onClick={ () => increment(setTotalMinutes, totalMinutes, 1, 59) }>+</button>
      </div>
      <div>
        <button className='decrement' onClick={ () => decrement(setTotalSeconds, totalSeconds, 10) }>-</button>
        <p>{totalSeconds}</p>
        <button className='increment' onClick={ () => increment(setTotalSeconds, totalSeconds, 10, 60) }>+</button>
      </div>
    </section>
  )
}
