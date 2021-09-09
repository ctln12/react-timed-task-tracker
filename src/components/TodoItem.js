import React from 'react';
import { Checkbox, IconButton, ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText } from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import useToggleState from '../hooks/useToggleState';
import EditTodoForm from './EditTodoForm';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '70%',
  },
}));

function TodoItem({ todo, toggleTodo, deleteTodo, editTodo }) {
  const [isEditing, toggleIsEditing] = useToggleState();
  const classes = useStyles();
  return (
    <ListItem>
      {isEditing ?
        <EditTodoForm todo={todo} editTodo={editTodo} toggleIsEditing={toggleIsEditing} />
      :
        <>
          <ListItemIcon>
            <Checkbox
              checked={todo.completed}
              color="default"
              aria-label="checkbox"
              onClick={() => toggleTodo(todo.id)}
            />
          </ListItemIcon>
          <ListItemText classes={{root: classes.root}}>{todo.task}</ListItemText>
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete" onClick={() => deleteTodo(todo.id)}>
              <Delete />
            </IconButton>
            <IconButton edge="end" aria-label="edit" onClick={() => toggleIsEditing()}>
              <Edit />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      }
    </ListItem>
  )
}

export default TodoItem;
