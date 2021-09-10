import React, { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(2, 1),
    minWidth: 120,
  },
}));

function SelectTime({ minutes, session }) {
  const classes = useStyles();
  const [time, setTime] = useState('');
  const handleChange = (event) => {
    setTime(event.target.value);
  };
  return (
    <FormControl variant="outlined" className={classes.formControl} fullWidth>
      <InputLabel id="number-label">{session.label}</InputLabel>
      <Select
        labelId={`${session.id}-label`}
        id={session.id}
        value={time}
        onChange={handleChange}
        label={session.label}
        inputProps={{ 'aria-label': session.ariaLabel }}
        style={{width: '100%'}}
      >
        <MenuItem value="">
          {session.label}
        </MenuItem>
        {minutes.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default SelectTime;
