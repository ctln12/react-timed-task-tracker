import React from 'react';

const Taskform = ({ newTaskName, changeNewTask, addTask }) => {
  const handleChange = (e) => {
    changeNewTask(e.target.value);
  }

  const handleSubmit = (e) => {
    addTask(newTaskName)
    e.preventDefault();
  }

  return (
    <form className='TaskForm' onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Add a new task'
        value={newTaskName}
        onChange={handleChange}
      />
    </form>
  );
}

export default Taskform;
