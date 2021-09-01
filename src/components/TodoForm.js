import React from 'react';
import useInputState from '../hooks/useInputState';
import { Box, Button, Divider, Paper, TextField, Typography } from '@material-ui/core';

function TodoForm({ addTodo }) {
  const [value, handleChange, reset] = useInputState('');
  const handleSubmit = e => {
    e.preventDefault();
    addTodo(value);
    reset();
  }
  return (
    <Paper style={{padding: '1rem'}}>
      <div style={{ width: '100%', marginBottom: '1rem' }}>
        <Box display='flex' justifyContent='center'>
          <Divider flexItem={true} style={{width: '70px', height: '4px', borderRadius: '3px', backgroundColor: 'black'}} />
        </Box>
      </div>
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
