import React from 'react';
import TimerCurrentTask from './TimerCurrentTask';
import { Box, Typography } from '@mui/material';

function TimerHeader({ nextTask, editTask, isFocusing, hasTasks, hasUncompletedTasks, handlePlusClick, handleMinusClick, isPlaying }) {
  const focusMessage = isPlaying ? 'Focusing...' : "Let's get to work!";
  const breakMessage = isPlaying ? 'Relaxing...' : "Let's take a break!";
  return (
    <Box className='TimerHeader' sx={{textAlign: 'center'}}>
      <Typography variant='h5' marginY={'1.2rem'} fontWeight={700}>{isFocusing ? focusMessage : breakMessage}</Typography>
      {hasTasks && hasUncompletedTasks &&
      <TimerCurrentTask nextTask={nextTask} editTask={editTask} isFocusing={isFocusing} handlePlusClick={handlePlusClick} handleMinusClick={handleMinusClick} />}
    </Box>
  );
}

export default TimerHeader;
