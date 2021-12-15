import React from 'react';
import TaskEditForm from './TaskEditForm';
import useToggleState from "../hooks/useToggleState";
import { pluralize } from '../helper/pluralize';

const Task = ({ task, editTask, deleteTask, handlePlusClick, handleMinusClick }) => {
  const [isEditing, toggleIsEditing] = useToggleState(false);
  const handleEditClick = () => {
    toggleIsEditing();
  }
  const handleCheckboxChange = () => {
    task.completed = !task.completed;
    task.completedFocus = task.completed ? task.nbFocus : 0;
    editTask(task);
  }
  const handleDeleteClick = () => {
    deleteTask(task.id);
  }

  return (
    <>
      { isEditing ?
        <TaskEditForm key={task.id} task={task} editTask={editTask} toggleIsEditing={toggleIsEditing} handlePlusClick={handlePlusClick} handleMinusClick={handleMinusClick} />
        :
        <li className='Task' key={task.id}>
          <input type='checkbox' checked={task.completed} value={task.completed} onChange={handleCheckboxChange} /> {task.name} - {`${task.completedFocus} / ${pluralize(task.nbFocus, 'session')}`} <button onClick={handleEditClick}>edit</button> <button onClick={handleDeleteClick}>delete</button>
        </li>
      }
    </>
  );
}

export default Task;
