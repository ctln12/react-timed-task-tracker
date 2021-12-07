import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import Timer from "./components/Timer";
import TaskList from './components/TaskList';
import Settings from "./components/Settings";

const TASKS = [
  {
    id: 1,
    name: 'Do yoga',
    completed: false
  },
    {
    id: 2,
    name: 'Meditate',
    completed: false
  },
    {
    id: 3,
    name: 'Build first project',
    completed: false
  },
];

const SETTINGS = {
  focus_length: 25,
  short_break_length: 5,
  long_break_length: 15,
  long_break_after: 4,
}

function App() {
  return (
    <div className='App'>
      <nav>
				<NavLink exact activeClassName='active-link' to='/'>Timer</NavLink> |
				<NavLink exact activeClassName='active-link' to='/tasks'>Tasks</NavLink> |
				<NavLink exact activeClassName='active-link' to='/settings'>Settings</NavLink>
      </nav>
      <Switch>
        <Route exact path='/' component={Timer} />
        <Route exact path='/tasks' render={() => <TaskList tasks={TASKS} />} />
        <Route exact path='/settings' render={() => <Settings settings={SETTINGS} />} />
      </Switch>
    </div>
  );
}

export default App;


// import React, { useEffect, useState } from 'react';
// import { Route, Switch } from 'react-router-dom';
// import Layout from './components/layout/Layout';
// import Timer from './components/Timer';
// import Settings from './components/Settings';
// import TodoList from './components/TodoList';
// import axios from 'axios';

// function App() {
//   const [settings, setSettings] = useState();
//   useEffect(() => {
//     async function getSettings() {
//       const response = await axios.get('https://rails-timed-task-tracker-api.herokuapp.com/api/v1/settings/1');
//       // const response = await axios.get('http://localhost:3000/api/v1/settings/1');
//       setSettings({focus: response.data.focus_time, shortBreak: response.data.short_break, longBreak: response.data.long_break, nbSessions: response.data.number_sessions, duration: response.data.duration, focusing: response.data.focusing, sessionCount: response.data.session_count})
//     }
//     getSettings();
//   }, []);
//   return (
//     <Layout>
//       <Switch >
//         <Route
//           exact path="/"
//           render={() => settings && <Timer settings={settings} setSettings={setSettings} />}
//         />
//         <Route
//           exact path="/settings"
//           render={() => settings && <Settings settings={settings} setSettings={setSettings} />}
//         />
//         <Route exact path="/tasks" render={() => <TodoList />} />
//       </Switch>
//     </Layout>
//   )
// }

// export default App;
