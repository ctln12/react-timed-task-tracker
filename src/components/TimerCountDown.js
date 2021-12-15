import React, { useState } from 'react';
import { CountdownCircleTimer } from "react-countdown-circle-timer";

function TimerCountDown({ duration, isFocusing, nextTask, editTask, toggleIsFocusing }) {
  const children = ({ remainingTime }) => {
    let minutes = Math.floor(remainingTime / 60);
    let seconds = remainingTime % 60;
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    return `${minutes}:${seconds}`;
  }
  const renderTime = ({ remainingTime }) => {
    return (
      <span>{children({ remainingTime })}</span>
    );
  }
  const [isPlaying, setIsPlaying] = useState(false);
  const [key, setKey] = useState(0);
  const handleStartClick = () => {
    setIsPlaying(!isPlaying);
  }
  const resetTimer = () => {
    setKey(key + 1);
    setIsPlaying(false);
  }
  const playSound = () => {
    const stopGong = new Audio('/stop_gong.mp3');
    stopGong.play();
  }
  const manageCurrentTask = () => {
    if (isFocusing) {
      nextTask.completedFocus += 1;
    }
    if (nextTask.nbFocus === nextTask.completedFocus) {
      nextTask.completed = true;
    }
    editTask(nextTask);
  }
  const handleStopClick = () => {
    resetTimer();
  }
  const handleSkipClick = () => {
    toggleIsFocusing();
    resetTimer();
  }
  const handleComplete = () => {
    playSound();
    manageCurrentTask();
    toggleIsFocusing();
    resetTimer();
  }

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
