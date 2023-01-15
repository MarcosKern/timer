import React, { useContext } from 'react';
import MyContext from '../context/Context';
import toggle from '../services/toggleMode';
import '../styles/menu.css';

export default function Menu() {
  const { menuCollapse, setMenuCollapse, setSelectedMode } = useContext(MyContext);
  return (
    <div className='collapsableMenu'>
      {
        menuCollapse
        ? <button onClick={ () => setMenuCollapse(!menuCollapse) }>

        </button>
        : toggle.map((mode) => {
          const {
            modeName,
            modeId,
            modeIcon,
          } = mode;

          return (
          <button
            onClick={ () => {
              setSelectedMode(modeId);
              setMenuCollapse(!menuCollapse);
              }
            }
          >
              <img src={ modeIcon } alt={ modeName } />
            </button>
          )
        })
      }
    </div>
  )
}
