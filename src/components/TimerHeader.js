import React from 'react';
import TimerCurrentTask from './TimerCurrentTask';

function TimerHeader() {
  return (
    <div className='TimerHeader'>
      <h2>Get to work!</h2>
      <TimerCurrentTask />
    </div>
  );
}

export default TimerHeader;
