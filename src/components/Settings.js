import React, { useState } from 'react';
import { Button, MenuItem, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import useInputState from '../hooks/useInputState';

const numbers = Array.from({length: 120}, (_, i) => i + 1);
const minutes = numbers.map(number => ({
  value: `${number}`,
  label: number === 1 ? `${number} minute` : `${number} minutes`
}));
const sessions = numbers.map(number => ({
  value: `${number}`,
  label: number === 1 ? `${number} session` : `${number} sessions`
}));

const useStyles = makeStyles((theme) => ({
  root: {
    width: 'fit-content',
    margin: theme.spacing(3),
  },
  select: {
    margin: theme.spacing(2, 0),
  },
  buttons: {
    marginTop: theme.spacing(3),
  },
  button: {
    marginBottom: theme.spacing(2),
    width: '100%',
  },
  link: {
    textDecoration: 'none',
  },
}));

function Settings({ initialSettings }) {
  const classes = useStyles();
  const [settings, setSettings] = useState(initialSettings);
  const handleSubmit = (event) => {
    event.preventDefault();
    setSettings({focus: focus, shortBreak: shortBreak, longBreak: longBreak, nbSessions: nbSessions});
  };

  const [focus, handleFocusChange] = useInputState(settings.focus);
  const [shortBreak, handleShortBreakChange] = useInputState(settings.shortBreak);
  const [longBreak, handleLongBreakChange] = useInputState(settings.longBreak);
  const [nbSessions, handleNbSessionsChange] = useInputState(settings.nbSessions);

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <TextField
        id="focus-session-length"
        label="Focus Session Length"
        variant="outlined"
        select
        fullWidth
        value={focus}
        onChange={handleFocusChange}
        className={classes.select}
      >
        {minutes.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        id="short-break-length"
        label="Short Break Length"
        variant="outlined"
        select
        fullWidth
        value={shortBreak}
        onChange={handleShortBreakChange}
        className={classes.select}
      >
        {minutes.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        id="long-break-length"
        label="Long Break Length"
        variant="outlined"
        select
        fullWidth
        value={longBreak}
        onChange={handleLongBreakChange}
        className={classes.select}
      >
        {minutes.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        id="long-break-after"
        label="Long Break After"
        variant="outlined"
        select
        fullWidth
        value={nbSessions}
        onChange={handleNbSessionsChange}
        className={classes.select}
      >
        {sessions.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <div className={classes.buttons}>
        <Button type="submit" variant="contained" size="large" className={classes.button}>Save</Button>
        <Link to="/" className={classes.link}>
          <Button variant="outlined" size="large" className={classes.button}>Back to timer</Button>
        </Link>
      </div>
    </form>
  )
}

export default Settings;
