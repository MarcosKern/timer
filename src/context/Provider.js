import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';

import MyContext from './Context';

function Provider({ children }) {
  const [totalHours, setTotalHours] = useState('00');
  const [totalMinutes, setTotalMinutes] = useState('00');
  const [totalSeconds, setTotalSeconds] = useState('00');
  const [timerAppears, setTimerAppears] = useState(true);
  const [ darkMode, setDarkMode ] = useState(true);

  const value = useMemo(() => ({
    totalHours, setTotalHours,
    totalMinutes, setTotalMinutes,
    totalSeconds, setTotalSeconds,
    timerAppears, setTimerAppears,
    darkMode, setDarkMode,
  }), [
    totalHours, setTotalHours,
    totalMinutes, setTotalMinutes,
    totalSeconds, setTotalSeconds,
    timerAppears, setTimerAppears,
    darkMode, setDarkMode,
  ]);

  return (
    <MyContext.Provider value={ value }>
      { children }
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;