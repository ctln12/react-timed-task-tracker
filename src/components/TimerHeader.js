import React from 'react';
import TimerCurrentTask from './TimerCurrentTask';

function TimerHeader({ nextTaskName, nextTaskNbFocus }) {
  return (
    <div className='TimerHeader'>
      <h2>Get to work!</h2>
      <TimerCurrentTask taskName={nextTaskName} taskNbFocus={nextTaskNbFocus} />
    </div>
  );
}

export default TimerHeader;
