import React from 'react';
import { Box, Container, IconButton, TextField } from '@mui/material';
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
    <Container
      maxWidth='sm'
    >
      <Box
        component='form'
        sx={{
          display: 'flex',
          alignItems: 'baseline',
          marginX: 'auto',
          paddingLeft: 2,
        }}
        noValidate
        autoComplete='off'
        onSubmit={handleSubmit}
      >
        <TextField
          id='new-task-name'
          variant='standard'
          label='Add a new task'
          placeholder='Do homework'
          autoFocus
          value={newTaskName}
          onChange={handleChange}
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
    </Container>
  );
}

export default TaskNewForm;
