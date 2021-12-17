import React from 'react';
import TaskEditForm from './TaskEditForm';
import useToggleState from "../hooks/useToggleState";
import { pluralize } from '../helper/pluralize';

const Task = ({ task, editTask, deleteTask, handlePlusClick, handleMinusClick }) => {
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
        <TaskEditForm key={task.id} task={task} editTask={editTask} toggleIsEditing={toggleIsEditing} handlePlusClick={handlePlusClick} handleMinusClick={handleMinusClick} disabled={disabled} />
        :
        <li className='Task' key={task.id}>
          <input type='checkbox' checked={task.done} value={task.done} onChange={handleCheckboxChange} /> {task.name} - {`${task.completed} / ${pluralize(task.pomodoros, 'session')}`} <button onClick={handleEditClick}>edit</button> <button onClick={handleDeleteClick}>delete</button>
        </li>
      }
    </>
  );
}

export default Task;
