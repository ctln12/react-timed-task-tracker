import React from 'react';
import TaskEditForm from './TaskEditForm';
import useToggleState from "../hooks/useToggleState";

const Task = ({ task, editTask, deleteTask }) => {
  const [isEditing, toggleIsEditing] = useToggleState(false);
  const handleEditClick = () => {
    toggleIsEditing();
  }
  const handleCheckboxChange = () => {
    task.completed = !task.completed;
    task.completedFocus = task.nbFocus;
    editTask(task);
  }
  const handleDeleteClick = () => {
    deleteTask(task.id);
  }

  return (
    <>
      { isEditing ?
        <TaskEditForm key={task.id} task={task} editTask={editTask} toggleIsEditing={toggleIsEditing} />
        :
        <li className='Task' key={task.id}>
          <input type='checkbox' checked={task.completed} value={task.completed} onChange={handleCheckboxChange} /> {task.name} <button onClick={handleEditClick}>edit</button> <button onClick={handleDeleteClick}>delete</button>
        </li>
      }
    </>
  );
}

export default Task;
