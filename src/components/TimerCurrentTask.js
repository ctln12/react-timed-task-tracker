import React from 'react';
import { pluralize } from "../helper/pluralize";
import useToggleState from '../hooks/useToggleState';
import TaskEditForm from './TaskEditForm';

function TimerCurrentTask({ nextTask, editTask, isFocusing, handlePlusClick, handleMinusClick }) {
  const [isEditing, toggleIsEditing] = useToggleState(false);
  const disabled = nextTask.nbFocus <= nextTask.completedFocus;

  return (
    <div className='TimerCurrentTask'>
      {isEditing ?
        <TaskEditForm task={nextTask} editTask={editTask} toggleIsEditing={toggleIsEditing} handlePlusClick={handlePlusClick} handleMinusClick={handleMinusClick} />
        :
        <p>{!isFocusing && 'Next up: '}{nextTask.name} <button onClick={() => toggleIsEditing()}>edit</button></p>
      }
      {/* This should be a component as in TaskEditForm */}
      <button onClick={e => handlePlusClick(e, nextTask)}>+</button>
      <span>{pluralize(nextTask.nbFocus, 'session')}</span>
      <button disabled={disabled} onClick={e => handleMinusClick(e, nextTask)}>-</button>
      {/* End of component */}
      <p>{!disabled && `${nextTask.completedFocus} / ${pluralize(nextTask.nbFocus, 'session')}`}</p>
    </div>
  );
}

export default TimerCurrentTask;
