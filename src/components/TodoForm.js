import React from 'react';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import useInputState from '../hooks/useInputState';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '1rem',
  },
}));

function TodoForm({ addTodo }) {
  const [value, handleChange, reset] = useInputState('');
  const handleSubmit = e => {
    e.preventDefault();
    addTodo(value);
    reset();
  }
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <form onSubmit={handleSubmit}>
        <TextField
          value={value}
          onChange={handleChange}
          label='What do you want to focus on?'
          variant='outlined'
          margin='normal'
          size='small'
          autoFocus
          fullWidth />
      </form>
    </div>
  )
}

export default TodoForm;
