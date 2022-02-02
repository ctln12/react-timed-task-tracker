import React, { useState } from 'react';
import TimerCountDown from './TimerCountDown';
import TimerHeader from './TimerHeader';
import { Container } from '@mui/material';

function Timer({ nextTask, duration, editTask, isFocusing, toggleIsFocusing, hasTasks, hasUncompletedTasks, handlePlusClick, handleMinusClick }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <Container
      maxWidth="sm"
      sx={{
        minHeight: 'calc(100vh - 90px)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <TimerHeader
        nextTask={nextTask}
        editTask={editTask}
        isFocusing={isFocusing}
        hasTasks={hasTasks}
        hasUncompletedTasks={hasUncompletedTasks}
        handlePlusClick={handlePlusClick}
        handleMinusClick={handleMinusClick}
        isPlaying={isPlaying}
      />
      <TimerCountDown
        duration={duration}
        isFocusing={isFocusing}
        nextTask={nextTask}
        editTask={editTask}
        toggleIsFocusing={toggleIsFocusing}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
    </Container>
  );
}

export default Timer;
