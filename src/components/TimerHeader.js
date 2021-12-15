import React from 'react';
import TimerCurrentTask from './TimerCurrentTask';

function TimerHeader({ nextTask, editTask }) {
  return (
    <div className='TimerHeader'>
      <h2>Get to work!</h2>
      <TimerCurrentTask nextTask={nextTask} editTask={editTask} />
    </div>
  );
}

export default TimerHeader;
