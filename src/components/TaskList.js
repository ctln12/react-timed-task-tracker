import React from 'react';
import Taskform from './TaskForm';
import Task from './Task';

const Tasklist = ({ tasks }) => {
  const taskList = tasks.map(task => (<Task key={task.id} task={task}/>));

  return (
    <div className='TaskList'>
      <h1>Tasks</h1>
      <Taskform />
      <ul>{ taskList }</ul>
    </div>
  );
}

export default Tasklist;
