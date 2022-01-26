import { useState } from 'react';
import { playSound } from '../helper/countdown';

const useTimerCountDownState = (isPlaying, setIsPlaying, task, isFocusing, toggleIsFocusing, editTask) => {
  const [key, setKey] = useState(0);
  const handleStartClick = () => {
    setIsPlaying(!isPlaying);
  }
  const resetTimer = () => {
    setKey(key + 1);
    setIsPlaying(false);
  }
  const manageCurrentTask = () => {
    if (task && isFocusing) {
      task.completed += 1;
    }
    if (task && task.pomodoros === task.completed) {
      task.done = true;
    }
    task && editTask(task);
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
    handleStartClick,
    handleStopClick,
    handleSkipClick,
    handleComplete
  }
};

export default useTimerCountDownState;
