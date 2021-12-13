import React from 'react';
import useInputState from "../hooks/useInputState";

const TaskEditForm = ({ task, editTask }) => {
  const [taskName, handleChange] = useInputState(task.name);

  const handleSubmit = (e) => {
    editTask(task.id, taskName);
    e.preventDefault();
  }

  return (
    <form className='TaskForm' onSubmit={handleSubmit}>
      <input
        type='text'
        value={taskName}
        onChange={handleChange}
      />
    </form>
  );
}

export default TaskEditForm;
