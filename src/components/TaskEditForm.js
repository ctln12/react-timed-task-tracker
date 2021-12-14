import React from 'react';
import useInputState from "../hooks/useInputState";

const TaskEditForm = ({ task, editTask, toggleIsEditing }) => {
  const [taskName, handleChange] = useInputState(task.name);

  const handleSubmit = (e) => {
    editTask(task.id, taskName, task.completed);
    toggleIsEditing();
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
      <input type='submit' value='Save' />
    </form>
  );
}

export default TaskEditForm;
