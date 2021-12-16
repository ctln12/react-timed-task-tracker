import React from 'react';
import useInputState from "../hooks/useInputState";
import TaskFocusButtons from './TaskFocusButtons';

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
      <TaskFocusButtons task={task} disabled={disabled} handlePlusClick={handlePlusClick} handleMinusClick={handleMinusClick} />
      <input type='submit' value='Save' />
    </form>
  );
}

export default TaskEditForm;
