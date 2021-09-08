import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import TodoList from './TodoList';
import useTodoState from '../hooks/useTodoState';

function TodoApp() {
  const initialTodos = [
    { id: 1, task: 'Do yoga', completed: true },
    { id: 2, task: 'Meditate', completed: true },
    { id: 3, task: 'Build first project', completed: false }
  ]
  const {todos, addTodo, toggleTodo, deleteTodo, editTodo} = useTodoState(initialTodos);
  return (
    <Paper elevation={0}>
      <Grid container justifyContent='center'>
        <Grid item xs={11} md={8} lg={4}>
          <TodoList
            todos={todos}
            addTodo={addTodo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default TodoApp;
