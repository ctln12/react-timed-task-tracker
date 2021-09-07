import React from 'react';
import { Checkbox, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

function TodoItem({ todo, toggleTodo }) {
  return (
    <ListItem>
      <ListItemIcon>
        <Checkbox
          checked={todo.completed}
          color="default"
          inputProps={{ 'aria-label': 'checkbox with default color' }}
          onClick={() => toggleTodo(todo.id)}
        />
      </ListItemIcon>
      <ListItemText>{todo.task}</ListItemText>
    </ListItem>
  )
}

export default TodoItem;
