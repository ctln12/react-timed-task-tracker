import React from 'react';
import { Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3),
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

function Timer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h5" align="center">Let's get to work!</Typography>
      <div className={classes.buttons}>
        <Button variant="contained">Start</Button>
        <Button variant="contained">Stop</Button>
      </div>
    </div>
  )
}

export default Timer;
