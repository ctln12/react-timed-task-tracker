import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './components/layout/Layout';
import TodoApp from './components/TodoApp';

function App() {
  return (
    <Layout>
      <Switch >
        <Route exact path="/" render={() => <h1>Timer</h1>} />
        <Route exact path="/settings" render={() => <h1>Timer Settings</h1>} />
        <Route exact path="/tasks" render={() => <TodoApp />} />
      </Switch>
    </Layout>
  )
}

export default App;
