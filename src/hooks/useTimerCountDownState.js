import { useState } from 'react';
import { playSound } from '../helper/countdown';

const useTimerCountDownState = (task, isFocusing, toggleIsFocusing, editTask) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [key, setKey] = useState(0);
  const handleStartClick = () => {
    setIsPlaying(!isPlaying);
  }
  const resetTimer = () => {
    setKey(key + 1);
    setIsPlaying(false);
  }
  const manageCurrentTask = () => {
    if (isFocusing) {
      task.completed += 1;
    }
    if (task.pomodoros === task.completed) {
      task.done = true;
    }
    editTask(task);
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

  return {
    key,
    isPlaying,
    handleStartClick,
    handleStopClick,
    handleSkipClick,
    handleComplete
  }
};

export default useTimerCountDownState;
