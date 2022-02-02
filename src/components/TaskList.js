import React from 'react';
import TaskNewForm from './TaskNewForm';
import Task from './Task';
import { Container, List } from '@mui/material';

function TaskList ({ tasks, newTaskName, changeNewTask, addTask, editTask, deleteTask, handlePlusClick, handleMinusClick }) {
  const taskList = tasks.map(task => (<Task key={task.id} task={task} editTask={editTask} deleteTask={deleteTask} handlePlusClick={handlePlusClick} handleMinusClick={handleMinusClick} />));

  return (
    <Container
      maxWidth='sm'
    >
      <TaskNewForm newTaskName={newTaskName} changeNewTask={changeNewTask} addTask={addTask} />
      <List
        sx={{marginTop: 1}}
      >
        { taskList }
      </List>
    </Container>
  );
}

export default TaskList;
