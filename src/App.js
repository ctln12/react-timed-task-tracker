import React from 'react';
import { Route, Switch } from 'react-router-dom';
import TodoApp from './components/TodoApp';

function App() {
  return (
    <Switch >
      <Route exact path="/" render={() => <h1>Timer</h1>} />
      <Route exact path="/settings" render={() => <h1>Timer Settings</h1>} />
      <Route exact path="/tasks" render={() => <TodoApp />} />
    </Switch>
  )
}

export default App;
