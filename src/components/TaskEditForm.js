import React, { useState } from 'react';
import useInputState from "../hooks/useInputState";

const TaskEditForm = ({ task, editTask, toggleIsEditing }) => {
  const [taskName, handleChange] = useInputState(task.name);
  const [taskNbFocus, handleNbFocusChange] = useState(task.nbFocus);
  const disabled = taskNbFocus <= task.completedFocus;

  const handleSubmit = (e) => {
    task.name = taskName;
    task.nbFocus = taskNbFocus;
    task.completed = task.nbFocus === task.completedFocus & taskNbFocus !== 0;
    editTask(task);
    toggleIsEditing();
    e.preventDefault();
  }
  const handlePlusClick = (e) => {
    handleNbFocusChange(taskNbFocus + 1);
    e.preventDefault();
  }
  const handleMinusClick = (e) => {
    handleNbFocusChange(taskNbFocus - 1);
    e.preventDefault();
  }

  return (
    <form className='TaskForm' onSubmit={handleSubmit}>
      <input
        type='text'
        value={taskName}
        onChange={handleChange}
        autoFocus
      />
      <button onClick={handlePlusClick}>+</button>
      <input type='number' value={taskNbFocus} onChange={handleNbFocusChange} />
      {/* {pluralize(nextTask.nbFocus, 'session')} */}
      <button disabled={disabled} onClick={handleMinusClick}>-</button>
      <input type='submit' value='Save' />
    </form>
  );
}

export default TaskEditForm;
