import React, { useContext } from 'react'
import MyContext from '../context/Context';
import '../styles/start.css'

export default function StartButton() {
  const { setTimerAppears } = useContext(MyContext);
  const handleClick = () => {
    setTimerAppears(false)
  }
  return (
    <button className='startBtn'
    onClick={ handleClick }>START</button>
  )
}
