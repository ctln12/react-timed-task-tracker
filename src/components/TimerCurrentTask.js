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
    <div className='TimerCurrentTask'>
      {isEditing ?
        <TaskEditForm task={nextTask} editTask={editTask} toggleIsEditing={toggleIsEditing} handlePlusClick={handlePlusClick} handleMinusClick={handleMinusClick} disabled={disabled} />
        :
        <Box marginY={'1rem'} sx={{display: 'flex', justifyContent: 'center', alignItems: 'baseline', flexWrap: 'wrap'}}>
          <Typography variant='h6' component='span'>{!isFocusing && 'Next:'}</Typography>
          <Typography variant="h6" marginX={'0.5rem'} component='span'>{nextTask.name}</Typography>
          <IconButton aria-label="edit" size="small" onClick={() => toggleIsEditing()}>
            <EditOutlined fontSize='small' />
          </IconButton>
        </Box>
      }
      <TaskFocusButtons task={nextTask} disabled={disabled} handlePlusClick={handlePlusClick} handleMinusClick={handleMinusClick} />
    </div>
  );
}

export default TimerCurrentTask;
