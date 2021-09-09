import React, { useEffect } from 'react';
import { List, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import useTodoState from '../hooks/useTodoState';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

const useStyles = makeStyles((theme) => ({
  list: {
    flexGrow: '1',
    overflowY: 'scroll',
    maxHeight: 'calc(100vh - 180px)',
  },
}));

function TodoList() {
  const initialTodos = [
    { id: 1, task: 'Do yoga', completed: true },
    { id: 2, task: 'Meditate', completed: true },
    { id: 3, task: 'Build first project', completed: false }
  ];
  const {todos, addTodo, toggleTodo, deleteTodo, editTodo} = useTodoState(initialTodos);
  useEffect(() => {
    const taskList = document.getElementById('task-list');
    const lastTask = taskList.children[taskList.children.length - 1];
    lastTask.scrollIntoView();
  });
  const classes = useStyles();
  return (
    <Paper elevation={0} className={classes.container}>
      <TodoForm addTodo={addTodo} />
      <List id="task-list" className={classes.list}>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        ))}
      </List>
    </Paper>
  )
}

export default TodoList;
