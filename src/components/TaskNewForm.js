import React from 'react';
import { Box, IconButton, TextField } from '@mui/material';
import { Add } from '@mui/icons-material';

function TaskNewForm ({ newTaskName, changeNewTask, addTask }) {
  const handleChange = (e) => {
    changeNewTask(e.target.value);
  }

  const handleSubmit = (e) => {
    addTask(newTaskName)
    e.preventDefault();
  }

  return (
    <Box
      component='form'
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        paddingY: 1,
        paddingX: 2,
      }}
    >
      <TextField
        id='new-task-name'
        variant='standard'
        label='Add a new task'
        placeholder='Do homework'
        value={newTaskName}
        onChange={handleChange}
        autoComplete='off'
        autoFocus
        sx={{
          flexGrow: 1,
          marginRight: 1,
        }}
      />
      <IconButton
        type='submit'
        sx={{
          padding: 0.5,
          alignSelf: 'flex-end',
        }}
      >
        <Add />
      </IconButton>
    </Box>
  );
}

export default TaskNewForm;
