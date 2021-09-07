import React from 'react';
import { Button, Grid, List, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import useToggleState from '../hooks/useToggleState';
import { ExpandLess } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  container: {
    height: '100vh',
  },
  list: {
    height: '100%',
  },
  formContainer: {
    position: 'fixed',
    bottom: '0',
    left: '0',
    width: '100%',
    backgroundColor: 'transparent',
  },
  buttonContainer: {
    padding: '1rem',
  },
}));

function TodoList({ todos, addTodo, toggleTodo, deleteTodo, editTodo }) {
  const [isAdding, toggleIsAdding] = useToggleState(false);
  const closeTodoForm = () => {
    if (isAdding) {
      toggleIsAdding()
    }
  };
  const classes = useStyles();
  return (
    <Paper className={classes.container}>
      <Typography gutterBottom variant='h3' align='center'>
        All Tasks
      </Typography>
      <List onClick={closeTodoForm} className={classes.list}>
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
      <Paper className={classes.formContainer} elevation={0} >
        <Grid container justifyContent='center'>
          <Grid item xs={11} md={8} lg={4}>
            { isAdding ?
              <TodoForm addTodo={addTodo} toggleIsAdding={toggleIsAdding} />
              :
              <div className={classes.buttonContainer}>
                <Button variant="contained" startIcon={<ExpandLess />} fullWidth onClick={() => toggleIsAdding()}>
                  Add a new task
                </Button>
              </div>
            }
          </Grid>
        </Grid>
      </Paper>
    </Paper>
  )
}

export default TodoList;
