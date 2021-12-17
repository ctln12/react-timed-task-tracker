import React from 'react';
import { pluralize } from '../helper/pluralize';

const TaskFocusButtons = ({ task, disabled, handlePlusClick, handleMinusClick }) => {
  return (
    <div className='TaskFocusButtons'>
      <button onClick={e => handlePlusClick(e, task)}>+</button>
      <span>{pluralize(task.pomodoros, 'session')}</span>
      <button disabled={disabled} onClick={e => handleMinusClick(e, task)}>-</button>
    </div>
  );
}

export default TaskFocusButtons;
