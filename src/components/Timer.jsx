import React, { useContext } from 'react';
import MyContext from '../context/Context';
import '../styles/counter.css';

export default function Timer() {
  const { totalHours, totalMinutes, totalSeconds } = useContext(MyContext);

  return (
    <div className='counter'>
      <p>{ totalHours }:{ totalMinutes }:{ totalSeconds }</p>
    </div>
  )
}
