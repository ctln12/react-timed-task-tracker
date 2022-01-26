import React from 'react';
import useInputState from '../hooks/useInputState';
import { Box, Button, TextField } from '@mui/material';
import { Check } from '@mui/icons-material';

function TaskEditNameForm({ task, editTask, toggleIsEditing }) {
  const [taskName, handleTaskNameChange] = useInputState(task.name);
  const handleSubmit = (e) => {
    task.name = taskName;
    editTask(task);
    toggleIsEditing();
    e.preventDefault();
  }

  return (
    <Box
      component='form'
      sx={{
        width: '70%',
        display: 'flex',
        alignItems: 'center',
        margin: '1rem auto'
      }}
      noValidate
      autoComplete='off'
      onSubmit={handleSubmit}
    >
      <TextField
        id='task-name'
        variant='standard'
        label='Edit current task name'
        placeholder='Please enter a task'
        autoFocus
        defaultValue={taskName}
        onChange={handleTaskNameChange}
        sx={{flexGrow: '1', marginRight: '0.5rem'}}
      />
      <Button
        type='submit'
        variant='outlined'
        color='inherit'
        startIcon={<Check size='large' variant='text' />}
        sx={{height: '40px', minWidth: '40px', padding: 0, '& > span': {margin: 0}}}
      />
    </Box>
  );
}

export default TaskEditNameForm;
