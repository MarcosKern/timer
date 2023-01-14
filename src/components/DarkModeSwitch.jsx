import React, { useContext } from 'react'
import MyContext from '../context/Context'
import '../styles/switch.css'

export default function DarkModeSwitch() {
  const { setDarkMode, darkMode } = useContext(MyContext);

  return (
    <button className='dayNightBtn' onClick={ () => setDarkMode(!darkMode)}>
      {
        darkMode ? 'NIGHT' : 'DAY'
      }
    </button>
  )
}
