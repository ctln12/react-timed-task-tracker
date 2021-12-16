import React from 'react';
import { pluralize } from "../helper/pluralize";
import useToggleState from '../hooks/useToggleState';
import TaskFocusButtons from './TaskFocusButtons';
import TaskEditForm from './TaskEditForm';

function TimerCurrentTask({ nextTask, editTask, isFocusing, handlePlusClick, handleMinusClick }) {
  const [isEditing, toggleIsEditing] = useToggleState(false);
  const disabled = nextTask.nbFocus <= nextTask.completedFocus;

  return (
    <div className='TimerCurrentTask'>
      {isEditing ?
        <TaskEditForm task={nextTask} editTask={editTask} toggleIsEditing={toggleIsEditing} handlePlusClick={handlePlusClick} handleMinusClick={handleMinusClick} disabled={disabled} />
        :
        <p>{!isFocusing && 'Next up: '}{nextTask.name} <button onClick={() => toggleIsEditing()}>edit</button></p>
      }
      <TaskFocusButtons task={nextTask} disabled={disabled} handlePlusClick={handlePlusClick} handleMinusClick={handleMinusClick} />
      <p>{!disabled && `${nextTask.completedFocus} / ${pluralize(nextTask.nbFocus, 'session')}`}</p>
    </div>
  );
}

export default TimerCurrentTask;
