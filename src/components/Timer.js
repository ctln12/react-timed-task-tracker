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

function Timer({ initialStartTime }) {
  const classes = useStyles();
  const initialTimerSettings = {
    startTime: initialStartTime * 60,
    isPlaying: false,
    key: 0
  };
  const {renderTime, timerSettings, toggleIsPlaying, stopTimer, playSound} = useTimerState(initialTimerSettings);
  return (
    <div className={classes.root}>
      <Typography gutterBottom={true} variant="h5" align="center">
        {timerSettings.isPlaying ? 'Focusing...' : "Let's get to work!"}
      </Typography>
      <div>
        <CountdownCircleTimer
          key={timerSettings.key}
          duration={timerSettings.startTime}
          isPlaying={timerSettings.isPlaying}
          onComplete={playSound}
          colors="#A5A5A5"
          size={240}
          strokeWidth={12}
          ariaLabel="count down timer"
        >
          {renderTime}
        </CountdownCircleTimer>
      </div>
      <div className={classes.buttons}>
        <Button variant="contained" size="large" onClick={toggleIsPlaying}>
          {timerSettings.isPlaying ? 'Pause' : 'Start'}
        </Button>
        <Button variant="contained" size="large" onClick={stopTimer}>Stop</Button>
      </div>
    </div>
  )
}

export default Timer;
