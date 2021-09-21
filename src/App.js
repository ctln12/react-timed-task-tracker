import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Timer from './components/Timer';
import Settings from './components/Settings';
import TodoList from './components/TodoList';
import axios from 'axios';

function App() {
  const [settings, setSettings] = useState(null);
  const [timer, setTimer] = useState(null);
  useEffect(() => {
    async function getSettings() {
      const response = await axios.get('http://localhost:3000/api/v1/settings/1');
      setSettings(response.data);
      setSettings({focus: response.data.focus_time, shortBreak: response.data.short_break, longBreak: response.data.long_break, nbSessions: response.data.number_sessions});
      setTimer({startTime: response.data.focus_time * 60, isPlaying: false, key: 0});
    }
    getSettings();
  }, []);
  return (
    <Layout>
      <Switch >
        <Route
          exact path="/"
          render={() => settings && <Timer timer={timer} setTimer={setTimer} />}
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
