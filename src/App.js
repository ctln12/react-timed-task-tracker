import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Timer from './components/Timer';
import Settings from './components/Settings';
import TodoList from './components/TodoList';
import axios from 'axios';

function App() {
  const [settings, setSettings] = useState();
  useEffect(() => {
    async function getSettings() {
      const response = await axios.get('https://rails-timed-task-tracker-api.herokuapp.com/api/v1/settings/1');
      // const response = await axios.get('http://localhost:3000/api/v1/settings/1');
      setSettings({focus: response.data.focus_time, shortBreak: response.data.short_break, longBreak: response.data.long_break, nbSessions: response.data.number_sessions, duration: response.data.duration, focusing: response.data.focusing, sessionCount: response.data.session_count})
    }
    getSettings();
  }, []);
  return (
    <Layout>
      <Switch >
        <Route
          exact path="/"
          render={() => settings && <Timer settings={settings} setSettings={setSettings} />}
        />
        <Route
          exact path="/settings"
          render={() => settings && <Settings settings={settings} setSettings={setSettings} />}
        />
        <Route exact path="/tasks" render={() => <TodoList />} />
      </Switch>
    </Layout>
  )
}

export default App;
