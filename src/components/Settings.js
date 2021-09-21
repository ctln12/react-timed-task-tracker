import React from 'react';
import { Button, MenuItem, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import axios from 'axios';

const numbers = Array.from({length: 120}, (_, i) => i + 1);
const minutes = numbers.map(number => ({
  value: number,
  label: number === 1 ? `${number} minute` : `${number} minutes`
}));
const sessions = numbers.map(number => ({
  value: number,
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

function Settings({ focus, setFocus, shortBreak, setShortBreak, longBreak, setLongBreak, nbSessions, setNbSessions, setTimer }) {
  const classes = useStyles();
  const handleFocusChange = e => {
    setFocus(e.target.value);
  };
  const handleShortBreakChange = e => {
    setShortBreak(e.target.value);
  };
  const handleLongBreakChange = e => {
    setLongBreak(e.target.value);
  };
  const handleNbSessionsChange = e => {
    setNbSessions(e.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    async function updateSettings() {
			const response = await axios.put(
				'https://rails-timed-task-tracker-api.herokuapp.com/api/v1/settings/1',
				{ focus_time: focus, short_break: shortBreak,
					long_break: longBreak, number_sessions: nbSessions }
			);
      setTimer({startTime: response.data.focus_time * 60, isPlaying: false, key: 0});
      setFocus(response.data.focus_time);
      setShortBreak(response.data.short_break);
      setLongBreak(response.data.long_break);
      setNbSessions(response.data.number_sessions);
		}
		updateSettings();
  };

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
