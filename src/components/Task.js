import React from 'react';
import TaskEditForm from './TaskEditForm';

const Task = ({ task, editTask }) => {
  return (
    <>
      <li className='Task' key={task.id}>
        {task.completed ? '[x]' : '[ ]'} - {task.name} <button>edit</button> <button>delete</button>
      </li>
      <TaskEditForm task={task} editTask={editTask} />
    </>
  );
}

export default Task;
