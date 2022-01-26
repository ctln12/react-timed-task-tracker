import React from 'react';
import { useHistory } from 'react-router-dom';
import { createSelectOptions } from '../helper/dropdown';
import { Box, Button, Container, FormControl, InputLabel, Select } from '@mui/material';
import { Save } from '@mui/icons-material';

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: '250px'
    },
  },
};

function Settings({settings, changeSettings, saveSettings }) {
  let history = useHistory();

  const handleSubmit = (e) => {
    saveSettings();
    e.preventDefault();
    history.push('/');
  }

  const handleSelectChange = (e) => {
    changeSettings(e.target);
  };

  const minuteOptions = createSelectOptions(120, 'minute');
  const sessionOptions = createSelectOptions(120, 'session');

  return (
    <Container className='Settings' maxWidth='sm'>
      <Box component='form' sx={{ minWidth: 120 }} onSubmit={handleSubmit}>
        <FormControl margin='normal' fullWidth>
          <InputLabel id='focus-label'>Focus length</InputLabel>
          <Select
            labelId='focus-label'
            id='focus'
            name='focusLength'
            value={settings.focusLength}
            label='Focus length'
            onChange={handleSelectChange}
            MenuProps={MenuProps}
            autoFocus
          >
            {minuteOptions}
          </Select>
        </FormControl>
        <FormControl margin='normal' fullWidth>
          <InputLabel id='short-label'>Short break length</InputLabel>
          <Select
            labelId='short-label'
            id='short'
            name='shortBreakLength'
            value={settings.shortBreakLength}
            label='Short break length'
            onChange={handleSelectChange}
            MenuProps={MenuProps}
          >
            {minuteOptions}
          </Select>
        </FormControl>
        <FormControl margin='normal' fullWidth>
          <InputLabel id='long-label'>Long break length</InputLabel>
          <Select
            labelId='long-label'
            id='long'
            name='longBreakLength'
            value={settings.longBreakLength}
            label='Long break length'
            onChange={handleSelectChange}
            MenuProps={MenuProps}
          >
            {minuteOptions}
          </Select>
        </FormControl>
        <FormControl margin='normal' fullWidth>
          <InputLabel id='sequence-label'>Long break after</InputLabel>
          <Select
            labelId='sequence-label'
            id='sequence'
            name='longBreakAfter'
            value={settings.longBreakAfter}
            label='Long break after'
            onChange={handleSelectChange}
            MenuProps={MenuProps}
          >
            {sessionOptions}
          </Select>
        </FormControl>
        <Button
          type='submit'
          variant='contained'
          color='inherit'
          fullWidth
          startIcon={<Save size='large' variant='text' />}
          sx={{marginTop: '1rem'}}
        >Save</Button>
      </Box>
    </Container>
  );
}

export default Settings;
