import { useState } from 'react';
import { Typography } from '@material-ui/core';

const useTimerState = (settings) => {
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
  };
  const renderTime = ({ remainingTime }) => {
    return (
      <Typography variant="h4">{children({ remainingTime })}</Typography>
    );
  };

  const [isPlaying, setIsPlaying] = useState(false);
  const [key, setKey] = useState(0);
  const stopTimer = () => {
    setIsPlaying(false);
    setKey(key + 1);
  };
  const playSound = () => {
    const stopGong = new Audio('/stop_gong.mp3');
    stopGong.play();
  };
  const getDuration = () => {
    if (settings.focusing && settings.focusCount % settings.nbSessions === settings.nbSessions - 1) {
      return settings.longBreak;
    } else {
      return settings.focusing ? settings.shortBreak : settings.focus;
    }
  };
  const getMessage = () => {
    if (settings.focusing) {
      return isPlaying ? 'Focusing...' : "Let's get to work!";
    } else {
      return isPlaying ? 'Relaxing...' : "Let's take a break!";
    }
  }

  return {
    key,
    isPlaying,
    setIsPlaying,
    renderTime,
    stopTimer,
    playSound,
    getDuration,
    getMessage
  }
};

export default useTimerState;
