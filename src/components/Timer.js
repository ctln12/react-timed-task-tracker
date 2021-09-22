import React, { useState } from 'react';
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import useTimerState from '../hooks/useTimerState';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3),
    height: 'calc(100vh - 125px)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttons: {
    marginTop: theme.spacing(2),
    display: 'flex',
    gap: '1rem',
    '& button': {
      flexGrow: 1,
    },
  },
}));

function Timer({ settings, setSettings }) {
  const classes = useStyles();
  // const {renderTime, toggleIsPlaying, stopTimer, playSound} = useTimerState(timer, setTimer);
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
  const message = () => {
    if (settings.focusing) {
      if (isPlaying) {
        return 'Focusing...';
      } else {
        return "Let's get to work!";
      }
    } else {
      if (isPlaying) {
        return 'Relaxing...';
      } else {
        return "Let's take a break!";
      }
    }
  };
  const stopTimer = () => {
    setIsPlaying(false);
    setKey(key + 1);
    console.log("Stop timer -> OK!");
  };
  const playSound = () => {
    const stopGong = new Audio('/stop_gong.mp3');
    stopGong.play();
    console.log("Play sound -> OK!");
  };
  const handleComplete = () => {
    playSound();
    if (settings.focusing && settings.focusCount % settings.nbSessions === settings.nbSessions - 1) {
      const newDuration = settings.focusing ? settings.longBreak : settings.focus;
      const newCount = settings.focusing ? settings.focusCount + 1 : settings.focusCount;
      setSettings({...settings, duration: newDuration, focusing: !settings.focusing, focusCount: newCount});
    } else {
      const newDuration = settings.focusing ? settings.shortBreak : settings.focus;
      const newCount = settings.focusing ? settings.focusCount + 1 : settings.focusCount;
      setSettings({...settings, duration: newDuration, focusing: !settings.focusing, focusCount: newCount});
    }
    stopTimer();
    console.log("Countdown complete!");
  };


  return (
    <div className={classes.root}>
      <Typography gutterBottom={true} variant="h5" align="center">
        {message()}
      </Typography>
      <div>
        <CountdownCircleTimer
          key={key}
          duration={settings.duration * 60}
          isPlaying={isPlaying}
          onComplete={handleComplete}
          colors="#A5A5A5"
          size={240}
          strokeWidth={12}
          ariaLabel="count down timer"
        >
          {renderTime}
        </CountdownCircleTimer>
      </div>
      <div className={classes.buttons}>
        <Button variant="contained" size="large" onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? 'Pause' : 'Start'}
        </Button>
        <Button variant="contained" size="large" onClick={stopTimer}>Stop</Button>
      </div>
    </div>
  )
}

export default Timer;
