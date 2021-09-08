import React from 'react';
import { Box, Button, IconButton, Paper, TextField, Typography } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import useInputState from '../hooks/useInputState';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '1rem',
  },
}));

function TodoForm({ addTodo, toggleIsAdding }) {
  const [value, handleChange, reset] = useInputState('');
  const handleSubmit = e => {
    e.preventDefault();
    addTodo(value);
    reset();
    if (value === "") {
      toggleIsAdding()
    }
  }
  const classes = useStyles();
  return (
    <Paper elevation={2} className={classes.container} style={{transition: '1.5s ease-in-out'}}>
      <Box display='flex' justifyContent='center' onClick={() => toggleIsAdding()}>
        <IconButton aria-label="close">
          <ExpandMore />
        </IconButton>
      </Box>
      <Typography gutterBottom variant='h5' align='center'>Add a new task</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          value={value}
          onChange={handleChange}
          label='What do you want to focus on?'
          variant='outlined'
          margin='normal'
          autoFocus
          fullWidth />
        <Button variant="contained" fullWidth type="submit">
          Save
        </Button>
      </form>
    </Paper>
  )
}

export default TodoForm;
