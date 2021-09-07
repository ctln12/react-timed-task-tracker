import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { Grid, Paper } from '@material-ui/core';

function TodoApp() {
  const initialTodos = [
    { id: 1, task: 'Do yoga', completed: true },
    { id: 2, task: 'Meditate', completed: true },
    { id: 3, task: 'Build first project', completed: false }
  ]
  const [todos, setTodos] = useState(initialTodos);
  const addTodo = newTask => {
    const newId = todos.length ? todos[todos.length - 1].id + 1 : 1;
    const newTodo = { id: newId, task: newTask, completed: false };
    setTodos([...todos, newTodo]);
  };
  const toggleTodo = todoId => {
    const updatedTodos = todos.map(todo =>
      todo.id === todoId ? {...todo, completed: !todo.completed} : todo
    );
    setTodos(updatedTodos);
  };
  const deleteTodo = todoId => {
    const filteredTodos = todos.filter(todo => todo.id !== todoId);
    setTodos(filteredTodos);
  };
  const editTodo = (todoId, newTask) => {
    const updatedTodos = todos.map(todo =>
      todo.id === todoId ? {...todo, task: newTask} : todo
    );
    setTodos(updatedTodos);
  };
  return (
    <Paper elevation={0}>
      <Grid container justifyContent='center'>
        <Grid item xs={11} md={8} lg={4}>
          <TodoList
            todos={todos}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
          <TodoForm addTodo={addTodo} />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default TodoApp;
