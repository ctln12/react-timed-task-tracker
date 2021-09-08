import { useState } from 'react';

const useTodoState = initialTodos => {
  const [todos, setTodos] = useState(initialTodos);
  const addTodo = newTask => {
    if (newTask === "") {
      return;
    }
    const newId = todos.length ? todos[todos.length - 1].id + 1 : 1;
    const newTodo = { id: newId, task: newTask, completed: false };
    setTodos([...todos, newTodo]);
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
    addTodo,
    toggleTodo,
    deleteTodo,
    editTodo
  }
};

export default useTodoState;
