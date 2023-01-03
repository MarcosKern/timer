import React, { useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';

import MyContext from './Context';

const ONE_SEC = 1000;

function Provider({ children }) {
  const [totalHours, setTotalHours] = useState('00');
  const [totalMinutes, setTotalMinutes] = useState('00');
  const [totalSeconds, setTotalSeconds] = useState('00');
  const [timerAppears, setTimerAppears] = useState(true);

  const value = useMemo(() => ({
    totalHours, setTotalHours,
    totalMinutes, setTotalMinutes,
    totalSeconds, setTotalSeconds,
    timerAppears, setTimerAppears,
  }), [
    totalHours, setTotalHours,
    totalMinutes, setTotalMinutes,
    totalSeconds, setTotalSeconds,
    timerAppears, setTimerAppears,
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