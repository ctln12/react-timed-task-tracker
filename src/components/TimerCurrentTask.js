import React from 'react';
import { pluralize } from "../helper/pluralize";
import useToggleState from '../hooks/useToggleState';
import TaskEditForm from './TaskEditForm';

function TimerCurrentTask({ nextTask, editTask, isFocusing }) {
  const handlePlusClick = () => {
    nextTask.nbFocus += 1;
    editTask(nextTask);
  }
  const handleMinusClick = () => {
    nextTask.nbFocus -= 1;
    editTask(nextTask);
  }
  const handleTaskNameClick = () => {
    toggleIsEditing();
  }
  const [isEditing, toggleIsEditing] = useToggleState(false);
  const zeroFocus = nextTask.nbFocus === 0;

  return (
    <div className='TimerCurrentTask'>
      {isEditing ?
        <TaskEditForm task={nextTask} editTask={editTask} toggleIsEditing={toggleIsEditing} />
        :
        <p>{!isFocusing && 'Next up: '}{nextTask.name} <button onClick={handleTaskNameClick}>edit</button></p>
      }
      <p><button onClick={handlePlusClick}>+</button> {pluralize(nextTask.nbFocus, 'session')} <button disabled={zeroFocus} onClick={handleMinusClick}>-</button></p>
      <p>{!zeroFocus && `${nextTask.completedFocus} / ${pluralize(nextTask.nbFocus, 'session')}`}</p>
    </div>
  );
}

export default TimerCurrentTask;
