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

function Timer({ timer, setTimer }) {
  const classes = useStyles();
  const {renderTime, toggleIsPlaying, stopTimer, playSound} = useTimerState(timer, setTimer);
  return (
    <div className={classes.root}>
      {timer && <Typography gutterBottom={true} variant="h5" align="center">
        {timer.isPlaying ? 'Focusing...' : "Let's get to work!"}
      </Typography>}
      <div>
        {timer && <CountdownCircleTimer
          key={timer.key}
          duration={timer.startTime}
          isPlaying={timer.isPlaying}
          onComplete={playSound}
          colors="#A5A5A5"
          size={240}
          strokeWidth={12}
          ariaLabel="count down timer"
        >
          {renderTime}
        </CountdownCircleTimer>}
      </div>
      <div className={classes.buttons}>
        {timer && <Button variant="contained" size="large" onClick={toggleIsPlaying}>
          {timer.isPlaying ? 'Pause' : 'Start'}
        </Button>}
        <Button variant="contained" size="large" onClick={stopTimer}>Stop</Button>
      </div>
    </div>
  )
}

export default Timer;
