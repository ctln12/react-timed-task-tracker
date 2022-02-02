import React from 'react';
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { renderTime } from '../helper/countdown';
import useTimerCountDownState from '../hooks/useTimerCountDownState';
import { Box, Button, Stack } from '@mui/material';

function TimerCountDown({ duration, isFocusing, nextTask, editTask, toggleIsFocusing, isPlaying, setIsPlaying }) {
  const { key, handleStartClick, handleStopClick, handleSkipClick, handleComplete } = useTimerCountDownState(isPlaying, setIsPlaying, nextTask, isFocusing, toggleIsFocusing, editTask);

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}
    >
      <CountdownCircleTimer
        key={key}
        duration={duration * 60}
        isPlaying={isPlaying}
        onComplete={handleComplete}
        colors="#1976d2"
        size={240}
        strokeWidth={12}
        ariaLabel="count down timer"
      >
        {renderTime}
      </CountdownCircleTimer>
      <Stack
        direction="row"
        spacing={2}
      >
        <Button
          variant="contained"
          size='large'
          onClick={handleStartClick}
        >
          {isPlaying ? 'Pause' : 'Start'}
        </Button>
        {
        isFocusing ?
          <Button
            variant="contained"
            size='large'
            onClick={handleStopClick}
          >
            Stop
          </Button>
        :
          <Button
            variant="contained"
            size='large'
            onClick={handleSkipClick}
          >
            Skip
          </Button>
        }
      </Stack>
    </Box>
  );
}

export default TimerCountDown;
