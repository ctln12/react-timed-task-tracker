import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Settings from './components/Settings';
import TodoList from './components/TodoList';

function App() {
  return (
    <Layout>
      <Switch >
        <Route exact path="/" render={() => <h1>Timer</h1>} />
        <Route exact path="/settings" render={() => <Settings />} />
        <Route exact path="/tasks" render={() => <TodoList />} />
      </Switch>
    </Layout>
  )
}

export default App;
