import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SelectTime from './SelectTime';
import { Link } from 'react-router-dom';

const numbers = Array.from({length: 120}, (_, i) => i + 1);
const minutes = numbers.map(number => ({
  value: `${number}`,
  label: `${number} minutes`
}));
const sessions = [
  {
    id: 'focus-session-length',
    label: 'Focus Session Length',
    ariaLabel: 'Select focus session length'
  },
  {
    id: 'short-break-length',
    label: 'Short Break Length',
    ariaLabel: 'Select short break length'
  },
  {
    id: 'long-break-length',
    label: 'Long Break Length',
    ariaLabel: 'Select long break length'
  },
  {
    id: 'long-break-after',
    label: 'Long Break After',
    ariaLabel: 'Select long break after'
  },
]

const useStyles = makeStyles((theme) => ({
  root: {
    width: 'fit-content',
    margin: theme.spacing(2),
  },
  buttons: {
    margin: theme.spacing(2, 0),
  },
  button: {
    margin: theme.spacing(1, 1),
    width: '100%',
  },
  link: {
    textDecoration: 'none',
  },
}));

function Settings() {
  const classes = useStyles();
  return (
    <form className={classes.root}>
      {sessions.map(session =>
        <SelectTime minutes={minutes} session={session} />
      )}
      <div className={classes.buttons}>
        <Button variant="contained" size="large" className={classes.button}>Save</Button>
        <Link to="/" className={classes.link}>
          <Button variant="outlined" size="large" className={classes.button}>Back to timer</Button>
        </Link>
      </div>
    </form>
  )
}

export default Settings;
