import React from 'react';
import { pluralize } from "../helper/pluralize";
import useToggleState from '../hooks/useToggleState';
import TaskEditForm from './TaskEditForm';

function TimerCurrentTask({ nextTask, editTask }) {
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

  return (
    <div className='TimerCurrentTask'>
      {isEditing ?
        <TaskEditForm task={nextTask} editTask={editTask} toggleIsEditing={toggleIsEditing} />
        :
        <p>{nextTask.name} <button onClick={handleTaskNameClick}>edit</button></p>
      }
      <p><button onClick={handlePlusClick}>+</button> {pluralize(nextTask.nbFocus, 'session')} <button onClick={handleMinusClick}>-</button></p>
    </div>
  );
}

export default TimerCurrentTask;
