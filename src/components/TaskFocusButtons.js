import React from 'react';
import { pluralize } from '../helper/pluralize';
import { Box, IconButton, Typography } from '@mui/material';
import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material';

const TaskFocusButtons = ({ task, disabled, handlePlusClick, handleMinusClick }) => {
  return (
    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <IconButton aria-label="add" size="small" onClick={e => handlePlusClick(e, task)}>
        <AddCircleOutline fontSize='small' />
      </IconButton>
      <Typography variant='body' component="span" width={'120px'}>
        {!disabled && `${task.completed} / ${pluralize(task.pomodoros, 'session')}`}</Typography>
      <IconButton disabled={disabled} aria-label="remove" size="small" onClick={e => handleMinusClick(e, task)}>
        <RemoveCircleOutline fontSize='small' />
      </IconButton>
    </Box>
  );
}

export default TaskFocusButtons;
