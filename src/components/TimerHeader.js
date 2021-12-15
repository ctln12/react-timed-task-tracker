import React from 'react';
import TimerCurrentTask from './TimerCurrentTask';

function TimerHeader({ nextTask, editTask, isFocusing, hasTasks, hasUncompletedTasks, handlePlusClick, handleMinusClick }) {
  return (
    <div className='TimerHeader'>
      <h2>{isFocusing ? "Let's get to work!" : "Let's take a break!"}</h2>
      {hasTasks && hasUncompletedTasks &&
        <TimerCurrentTask nextTask={nextTask} editTask={editTask} isFocusing={isFocusing} handlePlusClick={handlePlusClick} handleMinusClick={handleMinusClick} />}
    </div>
  );
}

export default TimerHeader;
