import React from 'react';
import { pluralize } from '../helper/pluralize';
import useInputState from "../hooks/useInputState";

const TaskEditForm = ({ task, editTask, toggleIsEditing, handlePlusClick, handleMinusClick }) => {
  const [taskName, handleTaskNameChange] = useInputState(task.name);
  const disabled = task.nbFocus <= task.completedFocus;
  const handleSubmit = (e) => {
    task.name = taskName;
    editTask(task);
    toggleIsEditing();
    e.preventDefault();
  }

  return (
    <form className='TaskForm' onSubmit={handleSubmit}>
      <input
        type='text'
        value={taskName}
        onChange={handleTaskNameChange}
        autoFocus
      />
      {/* This should be a component as in TimerCurrentTask */}
      <button onClick={e => handlePlusClick(e, task)}>+</button>
      <span>{pluralize(task.nbFocus, 'session')}</span>
      <button disabled={disabled} onClick={e => handleMinusClick(e, task)}>-</button>
      {/* End of component */}
      <input type='submit' value='Save' />
    </form>
  );
}

export default TaskEditForm;
