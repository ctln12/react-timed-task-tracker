import React from 'react';

const Task = ({ task }) => {
  return (
    <li className='Task'>
      {task.name}
      <button>edit</button>
      <button>delete</button>
    </li>
  );
}

export default Task;
