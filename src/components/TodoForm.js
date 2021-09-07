import React from 'react';
import { Box, Button, Divider, Paper, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import useInputState from '../hooks/useInputState';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '1rem',
  },
  divider: {
    width: '70px',
    height: '4px',
    borderRadius: '3px',
    backgroundColor: 'black',
  }
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
    <Paper className={classes.container}>
      <Box display='flex' justifyContent='center' marginBottom='1rem'>
        <Divider flexItem={true} className={classes.divider} />
      </Box>
      <Typography gutterBottom variant='h5' align='center'>New task</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          value={value}
          onChange={handleChange}
          label='What do you want to focus on?'
          variant='outlined'
          margin='normal'
          fullWidth />
        <Button variant="contained" fullWidth type="submit">
          Add task
        </Button>
      </form>
    </Paper>
  )
}

export default TodoForm;
