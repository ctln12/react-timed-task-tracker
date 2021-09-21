import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Timer from './components/Timer';
import Settings from './components/Settings';
import TodoList from './components/TodoList';
import axios from 'axios';

function App() {
  const [timer, setTimer] = useState(null);
  const [focus, setFocus] = useState('');
  const [shortBreak, setShortBreak] = useState('');
  const [longBreak, setLongBreak] = useState('');
  const [nbSessions, setNbSessions] = useState('');
  useEffect(() => {
    async function getSettings() {
      const response = await axios.get('https://rails-timed-task-tracker-api.herokuapp.com/api/v1/settings/1');
      setTimer({startTime: response.data.focus_time * 60, isPlaying: false, key: 0});
      setFocus(response.data.focus_time);
      setShortBreak(response.data.short_break);
      setLongBreak(response.data.long_break);
      setNbSessions(response.data.number_sessions);
    }
    getSettings();
  }, []);
  return (
    <Layout>
      <Switch >
        <Route
          exact path="/"
          render={() => focus && <Timer timer={timer} setTimer={setTimer} />}
        />
        <Route
          exact path="/settings"
          render={() => focus && <Settings focus={focus} setFocus={setFocus} shortBreak={shortBreak} setShortBreak={setShortBreak} longBreak={longBreak} setLongBreak={setLongBreak} nbSessions={nbSessions} setNbSessions={setNbSessions} setTimer={setTimer} />}
        />
        <Route exact path="/tasks" render={() => <TodoList />} />
      </Switch>
    </Layout>
  )
}

export default App;
