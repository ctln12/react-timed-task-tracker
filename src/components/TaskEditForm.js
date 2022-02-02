import React from 'react';
import useInputState from "../hooks/useInputState";
import TaskFocusButtons from './TaskFocusButtons';
import { Box, Button, TextField } from '@mui/material';
import { Check } from '@mui/icons-material';

function TaskEditForm({ task, editTask, toggleIsEditing, handlePlusClick, handleMinusClick, disabled }) {
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
      onSubmit={handleSubmit}
      sx={{paddingY: 1, paddingX: 2}}
    >
      <TextField
        id='edit-task-name'
        variant='standard'
        label='Edit current task name'
        value={taskName}
        onChange={handleTaskNameChange}
        autoComplete='off'
        fullWidth
        autoFocus
      />
      <Box
        sx={{paddingY: 2}}
      >
        <TaskFocusButtons
          task={task}
          disabled={disabled}
          handlePlusClick={handlePlusClick}
          handleMinusClick={handleMinusClick}
        />
      </Box>
      <Button
        type='submit'
        variant='contained'
        startIcon={<Check size='large'/>}
        fullWidth
      />
    </Box>
  );
}

export default TaskEditForm;
