import React from 'react';
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { renderTime } from '../helper/countdown';
import useTimerCountDownState from '../hooks/useTimerCountDownState';
import { Box, Button, Stack } from '@mui/material';

function TimerCountDown({ duration, isFocusing, nextTask, editTask, toggleIsFocusing }) {
  const { key, isPlaying, handleStartClick, handleStopClick, handleSkipClick, handleComplete } = useTimerCountDownState(nextTask, isFocusing, toggleIsFocusing, editTask);

  return (
    <Box className='TimerCountDown' style={{flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center'}}>
      <CountdownCircleTimer
        key={key}
        duration={duration * 60}
        isPlaying={isPlaying}
        onComplete={handleComplete}
        colors="#A5A5A5"
        size={240}
        strokeWidth={12}
        ariaLabel="count down timer"
      >
        {renderTime}
      </CountdownCircleTimer>
      <Stack direction="row" spacing={2}>
        <Button variant="contained" color="inherit" size='large' onClick={handleStartClick}>{isPlaying ? 'Pause' : 'Start'}</Button>
        {isFocusing ?
          <Button variant="contained" color="inherit" size='large' onClick={handleStopClick}>Stop</Button>
          :
          <Button variant="contained" color="inherit" size='large' onClick={handleSkipClick}>Skip</Button>
        }
      </Stack>
    </Box>
  );
}

export default TimerCountDown;
