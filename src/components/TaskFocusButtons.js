import React from 'react';
import { pluralize } from '../helper/pluralize';
import { Box, IconButton, Typography } from '@mui/material';
import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material';

function TaskFocusButtons({ task, disabled, handlePlusClick, handleMinusClick }) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <IconButton
        aria-label="add"
        size="small"
        color="primary"
        onClick={e => handlePlusClick(e, task)}
      >
        <AddCircleOutline fontSize='small' />
      </IconButton>
      <Typography
        variant='body'
        component="span"
        width={'100%'}
        textAlign='center'
      >
        {!disabled && `${task.completed} / ${pluralize(task.pomodoros, 'session')}`}</Typography>
      <IconButton
        aria-label="remove"
        size="small"
        color="primary"
        onClick={e => handleMinusClick(e, task)}
        disabled={disabled}
      >
        <RemoveCircleOutline fontSize='small' />
      </IconButton>
    </Box>
  );
}

export default TaskFocusButtons;
