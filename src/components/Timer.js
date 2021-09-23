import React from 'react';
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import useTimerState from '../hooks/useTimerState';

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
  const {key, isPlaying, setIsPlaying, renderTime, stopTimer, playSound, getDuration, getMessage} = useTimerState(settings);
  const message = getMessage();
  const handleComplete = () => {
    playSound();
    const newDuration = getDuration();
    const newCount = settings.focusing ? settings.focusCount + 1 : settings.focusCount;
    setSettings({...settings, duration: newDuration, focusing: !settings.focusing, focusCount: newCount});
    stopTimer();
  };

  return (
    <div className={classes.root}>
      <Typography gutterBottom={true} variant="h5" align="center">
        {message}
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
