import React from 'react';
import TodoItem from './TodoItem';
import { List, Paper, Typography } from '@material-ui/core';

function TodoList({ todos, toggleTodo }) {
  return (
    <Paper>
      <Typography gutterBottom variant='h3' align='center'>
        All Tasks
      </Typography>
      <List>
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
        ))}
      </List>
    </Paper>
  )
}

export default TodoList;
