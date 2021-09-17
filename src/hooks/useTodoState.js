import { useState } from 'react';
import axios from 'axios';

const baseUrl = 'https://rails-timed-task-tracker-api.herokuapp.com/api/v1/tasks';

const useTodoState = initialTodos => {
  const [todos, setTodos] = useState(initialTodos);
  const addTodo = newTask => {
    if (newTask === "") {
      return;
    }
    async function createTodo(newTask) {
      const response = await axios.post(baseUrl, { name: newTask });
      setTodos([...todos, response.data]);
    }
    createTodo(newTask);
  };
  const deleteTodo = todoId => {
    async function destroyTodo(id) {
      const response = await axios.delete(`${baseUrl}/${id}`)
      setTodos(response.data);
    }
    destroyTodo(todoId);
  };
  const editTodo = (todoId, editedName, editedCompleted) => {
		async function updateTodo(id, name, completed) {
      const response = await axios.put(`${baseUrl}/${id}`,{ name: name, completed: completed });
      setTodos(response.data);
    }
		updateTodo(todoId, editedName, editedCompleted);
	}

  return {
    todos,
    setTodos,
    addTodo,
    deleteTodo,
    editTodo
  }
};

export default useTodoState;
