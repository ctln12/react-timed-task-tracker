import React from 'react';
import TaskNewForm from './TaskNewForm';
import Task from './Task';

const TaskList = ({ tasks, newTaskName, changeNewTask, addTask }) => {
  const taskList = tasks.map(task => (<Task key={task.id} task={task}/>));

  return (
    <div className='TaskList'>
      <h1>Tasks</h1>
      <TaskNewForm newTaskName={newTaskName} changeNewTask={changeNewTask} addTask={addTask} />
      <ul>{ taskList }</ul>
    </div>
  );
}

export default TaskList;
