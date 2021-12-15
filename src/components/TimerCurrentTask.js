import React from 'react';
import { pluralize } from "../helper/pluralize";

function TimerCurrentTask({ nextTask, editTask }) {
  const handlePlusClick = () => {
    nextTask.nbFocus += 1;
    editTask(nextTask);
  }
  const handleMinusClick = () => {
    nextTask.nbFocus -= 1;
    editTask(nextTask);
  }

  return (
    <div className='TimerCurrentTask'>
      <p>{nextTask.name}</p>
      <p><button onClick={handlePlusClick}>+</button> {pluralize(nextTask.nbFocus, 'session')} <button onClick={handleMinusClick}>-</button></p>
    </div>
  );
}

export default TimerCurrentTask;
