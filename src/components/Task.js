import React from 'react';
import TaskEditForm from './TaskEditForm';
import useToggleState from "../hooks/useToggleState";

const Task = ({ task, editTask }) => {
  const [isEditing, toggleIsEditing] = useToggleState(false);
  const handleEditClick = () => {
    toggleIsEditing();
  }
  const handleCheckboxChange = () => {
    task.completed = !task.completed;
    editTask(task);
  }

  return (
    <>
      { isEditing ?
        <TaskEditForm key={task.id} task={task} editTask={editTask} toggleIsEditing={toggleIsEditing} />
        :
        <li className='Task' key={task.id}>
          <input type='checkbox' checked={task.completed} value={task.completed} onChange={handleCheckboxChange} /> - {task.name} <button onClick={handleEditClick}>edit</button> <button>delete</button>
        </li>
      }
    </>
  );
}

export default Task;
