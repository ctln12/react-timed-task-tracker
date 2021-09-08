import React, { useEffect } from 'react';
import clsx from 'clsx';
import { Button, Drawer, List, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import useToggleState from '../hooks/useToggleState';
import { ExpandLess } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  BackdropProps: {
    backgroundColor: 'transparent',
    height: 'fit-content',
  },
  buttonContainer: {
    padding: '1rem',
  },
  collapse: {
    paddingBottom: '180px',
  },
  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  list: {
    flexGrow: '1',
    overflowY: 'scroll',
  },
  modal: {
    height: 'fit-content',
  },
  paper: {
    display: 'grid',
    gridTemplateColumns: '4fr 4fr 4fr',
    backgroundColor: 'transparent',
    border: 'none',
    overflow: 'hidden',
    '& > div': {
      gridColumnStart: '2',
      border: '1px solid rgba(0, 0, 0, 0.03)',
    }
  },
}));

function TodoList({ todos, addTodo, toggleTodo, deleteTodo, editTodo }) {
  const [isAdding, toggleIsAdding] = useToggleState(false);
  useEffect(() => {
    const taskList = document.getElementById('task-list');
    const lastTask = taskList.children[taskList.children.length - 1];
    if (isAdding) {
      lastTask.scrollIntoView();
    }
  });
  const toggleDrawer = () => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    toggleIsAdding();
  };
  const classes = useStyles();
  return (
    <Paper className={classes.container}>
      <Typography gutterBottom variant='h3' align='center'>
        All Tasks
      </Typography>
      <List id="task-list" className={clsx(classes.list, {[classes.collapse]: isAdding})}>
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
      <Paper elevation={0} >
        <div id="new-task-btn" className={classes.buttonContainer}>
          <Button variant="contained" startIcon={<ExpandLess />} fullWidth onClick={toggleDrawer()}>
            Add a new task
          </Button>
        </div>
        <Drawer
          id="drawer"
          anchor='bottom'
          elevation={0}
          open={isAdding}
          onClose={toggleDrawer()}
          ModalProps={{
            BackdropProps: {
              classes: {
                root: classes.BackdropProps
              }
            }
          }}
          classes={{
            paper: classes.paper,
            modal: classes.modal
          }}
        >
          <TodoForm addTodo={addTodo} toggleIsAdding={toggleIsAdding} />
        </Drawer>
      </Paper>
    </Paper>
  )
}

export default TodoList;
