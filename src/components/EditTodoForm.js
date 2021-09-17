import React from 'react';
import { Button, TextField } from '@material-ui/core';
import { Check } from '@material-ui/icons';
import useInputState from '../hooks/useInputState';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    flexGrow: '1',
    marginRight: '0.5rem',
  },
  submit: {
    height: '40px',
    minWidth: 'unset',
    padding: '6px 12px',
    '& > span > span': {
      margin: 0,
    },
  },
}));

function EditTodoForm({ todo, editTodo, toggleIsEditing }) {
  const [value, handleChange, reset] = useInputState(todo.name);
  const handleSubmit = e => {
    e.preventDefault();
    editTodo(todo.id, value, todo.completed);
    reset();
    toggleIsEditing();
  };
  const classes = useStyles();
  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <TextField
        value={value}
        onChange={handleChange}
        label='Edit your task'
        variant='outlined'
        margin='none'
        size='small'
        autoFocus
        className={classes.input}
      />
      <Button
        type="submit"
        variant="contained"
        disableElevation={true}
        startIcon={<Check size="large" variant="text" />}
        className={classes.submit}
      ></Button>
    </form>
  )
}

export default EditTodoForm;
