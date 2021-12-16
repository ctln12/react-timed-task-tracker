import React from 'react';
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { renderTime } from '../helper/countdown';
import useTimerCountDownState from '../hooks/useTimerCountDownState';

function TimerCountDown({ duration, isFocusing, nextTask, editTask, toggleIsFocusing }) {
  const { key, isPlaying, handleStartClick, handleStopClick, handleSkipClick, handleComplete } = useTimerCountDownState(nextTask, isFocusing, toggleIsFocusing, editTask);

  return (
    <div className='TimerCountDown'>
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
      <button onClick={handleStartClick}>{isPlaying ? 'Pause' : 'Start'}</button>
      {isFocusing ?
        <button onClick={handleStopClick}>Stop</button>
        :
        <button onClick={handleSkipClick}>Skip</button>
      }
    </div>
  );
}

export default TimerCountDown;
