import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Timer from './components/Timer';
import Settings from './components/Settings';
import TodoList from './components/TodoList';

function App() {
  const initialSettings = {
    focus: '25',
    shortBreak: '5',
    longBreak: '15',
    nbSessions: '4'
  };
  const [settings, setSettings] = useState(initialSettings);
  return (
    <Layout>
      <Switch >
        <Route
          exact path="/"
          render={() => <Timer startTime={settings.focus} />}
        />
        <Route
          exact path="/settings"
          render={() => <Settings settings={settings} setSettings={setSettings} />}
        />
        <Route exact path="/tasks" render={() => <TodoList />} />
      </Switch>
    </Layout>
  )
}

export default App;
