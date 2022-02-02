import React from 'react';
import TaskEditForm from './TaskEditForm';
import useToggleState from "../hooks/useToggleState";
import { pluralize } from '../helper/pluralize';
import { Box, Checkbox, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { DeleteOutlined, EditOutlined } from '@mui/icons-material';

function Task({ task, editTask, deleteTask, handlePlusClick, handleMinusClick }) {
  const [isEditing, toggleIsEditing] = useToggleState(false);
  const disabled = task.pomodoros <= task.completed;
  const handleEditClick = () => {
    toggleIsEditing();
  }
  const handleCheckboxChange = () => {
    task.done = !task.done;
    task.completed = task.done ? task.pomodoros : 0;
    editTask(task);
  }
  const handleDeleteClick = () => {
    deleteTask(task.id);
  }

  return (
    <>
      { isEditing ?
        <TaskEditForm
          key={task.id}
          task={task}
          editTask={editTask}
          toggleIsEditing={toggleIsEditing}
          handlePlusClick={handlePlusClick}
          handleMinusClick={handleMinusClick}
          disabled={disabled}
        />
      :
        <ListItem
          key={task.id}
          secondaryAction={
            <Box>
              <IconButton
                aria-label='edit'
                size='small'
                onClick={handleEditClick}
              >
                <EditOutlined fontSize='small' />
              </IconButton>
              <IconButton
                aria-label='delete'
                size='small'
                onClick={handleDeleteClick}
              >
                <DeleteOutlined fontSize='small' />
              </IconButton>
            </Box>
          }
          disablePadding
        >
          <ListItemButton
            onChange={handleCheckboxChange}
          >
            <ListItemIcon>
              <Checkbox
                edge='start'
                checked={task.done}
                inputProps={{'aria-labelledby': task.id}}
              />
            </ListItemIcon>
            <ListItemText
              id={task.id}
              secondary={`${task.completed} / ${pluralize(task.pomodoros, 'session')}`}
            >
              {task.name}
            </ListItemText>
          </ListItemButton>
        </ListItem>
      }
    </>
  );
}

export default Task;
