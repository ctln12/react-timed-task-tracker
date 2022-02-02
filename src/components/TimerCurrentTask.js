import React from 'react';
import useToggleState from '../hooks/useToggleState';
import TaskFocusButtons from './TaskFocusButtons';
import TaskEditForm from './TaskEditForm';
import { Box, IconButton, Typography } from '@mui/material';
import { EditOutlined } from '@mui/icons-material';

function TimerCurrentTask({ nextTask, editTask, isFocusing, handlePlusClick, handleMinusClick }) {
  const [isEditing, toggleIsEditing] = useToggleState(false);
  const disabled = nextTask.pomodoros <= nextTask.completed;

  return (
    <Box>
      {
      isEditing ?
        <TaskEditForm
          key={nextTask.id}
          task={nextTask}
          editTask={editTask}
          toggleIsEditing={toggleIsEditing}
          handlePlusClick={handlePlusClick}
          handleMinusClick={handleMinusClick}
          disabled={disabled}
        />
      :
        <Box>
          <Box
            marginY={2}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'baseline',
              flexWrap: 'wrap'
            }}
          >
            <Typography variant='h6' component='span'>
              {!isFocusing && 'Next:'}
            </Typography>
            <Typography variant='h6' component='span' marginX={1}>
              {nextTask.name}
            </Typography>
            <IconButton
              aria-label='edit'
              size='small'
              color='primary'
              onClick={() => toggleIsEditing()}
            >
              <EditOutlined fontSize='small' />
            </IconButton>
          </Box>
          <Box sx={{width: '50%', marginX: 'auto'}}>
            <TaskFocusButtons
              task={nextTask}
              disabled={disabled}
              handlePlusClick={handlePlusClick}
              handleMinusClick={handleMinusClick}
            />
          </Box>
        </Box>
      }
    </Box>
  );
}

export default TimerCurrentTask;
