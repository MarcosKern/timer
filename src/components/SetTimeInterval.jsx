import React, { useContext } from 'react'
import MyContext from '../context/Context'
import '../styles/setTime.css'

export default function SetTimeInterval() {
  const { setTotalHours, setTotalMinutes, setTotalSeconds } = useContext(MyContext);

  const handleChange = (eve, func) => {
    const {
      target: {
        value
      }
    } = eve;
    
    func(value.padStart(2, '0'))
  }
  return (
    <section className='setTime'>
      <input type="number" name="Seconds" id="s" max='24' min='00' defaultValue='00'
      onChange={(event) => handleChange(event, setTotalHours)}/>
      <input type="number" name="Minutes" id="m" max='59' min='00' defaultValue='00'
      onChange={(event) => handleChange(event, setTotalMinutes)}/>
      <input type="number" name="Hours" id="h" max='60' min='00' step='10' defaultValue='00'
      onChange={(event) => handleChange(event, setTotalSeconds)}/>
    </section>
  )
}
