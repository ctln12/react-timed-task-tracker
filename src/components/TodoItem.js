import React from 'react';
import { Checkbox, IconButton, ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText } from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';

function TodoItem({ todo, toggleTodo, deleteTodo, editTodo }) {
  return (
    <ListItem>
      <ListItemIcon>
        <Checkbox
          checked={todo.completed}
          color="default"
          aria-label="checkbox"
          onClick={() => toggleTodo(todo.id)}
        />
      </ListItemIcon>
      <ListItemText>{todo.task}</ListItemText>
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="delete" onClick={() => deleteTodo(todo.id)}>
          <Delete />
        </IconButton>
        <IconButton edge="end" aria-label="edit" onClick={() => editTodo(todo.id)}>
          <Edit />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}

export default TodoItem;
