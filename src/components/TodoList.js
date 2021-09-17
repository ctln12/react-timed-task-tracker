import React, { useEffect } from 'react';
import { List, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import useTodoState from '../hooks/useTodoState';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  list: {
    flexGrow: '1',
    overflowY: 'scroll',
    maxHeight: 'calc(100vh - 180px)',
  },
}));

function TodoList() {
  const classes = useStyles();
  const {todos, setTodos, addTodo, deleteTodo, editTodo} = useTodoState([]);
  useEffect(() => {
    const taskList = document.getElementById('task-list');
    if (taskList.children.length > 0) {
      const lastTask = taskList.children[taskList.children.length - 1];
      lastTask.scrollIntoView();
    }
  });
  useEffect(() => {
    async function getTodos() {
      const response = await axios.get('https://rails-timed-task-tracker-api.herokuapp.com/api/v1/tasks');
      setTodos(response.data);
    }
      getTodos();
  }, [setTodos]);
  return (
    <Paper elevation={0} className={classes.container}>
      <TodoForm addTodo={addTodo} />
      <List id="task-list" className={classes.list}>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        ))}
      </List>
    </Paper>
  )
}

export default TodoList;
