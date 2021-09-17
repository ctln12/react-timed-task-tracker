import { useState } from 'react';
import axios from 'axios';

const useTodoState = initialTodos => {
  const [todos, setTodos] = useState(initialTodos);
  const addTodo = newTask => {
    if (newTask === "") {
      return;
    }
    async function createTodo(newTask) {
      const response = await axios.post('https://rails-timed-task-tracker-api.herokuapp.com/api/v1/tasks', { name: newTask });
      setTodos([...todos, response.data]);
    }
    createTodo(newTask);
  };
  const toggleTodo = todoId => {
    const updatedTodos = todos.map(todo =>
      todo.id === todoId ? {...todo, completed: !todo.completed} : todo
    );
    setTodos(updatedTodos);
  };
  const deleteTodo = todoId => {
    const filteredTodos = todos.filter(todo => todo.id !== todoId);
    setTodos(filteredTodos);
  };
  const editTodo = (todoId, newTask) => {
    const updatedTodos = todos.map(todo =>
      todo.id === todoId ? {...todo, task: newTask} : todo
    );
    setTodos(updatedTodos);
  };

  return {
    todos,
    setTodos,
    addTodo,
    toggleTodo,
    deleteTodo,
    editTodo
  }
};

export default useTodoState;
