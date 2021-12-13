import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import Timer from "./components/Timer";
import TaskList from './components/TaskList';
import Settings from "./components/Settings";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {
          id: 1,
          name: 'Do yoga',
          completed: false,
          nbFocus: 1,
          completedFocus: 0,
        },
          {
          id: 2,
          name: 'Meditate',
          completed: false,
          nbFocus: 2,
          completedFocus: 0,
        },
          {
          id: 3,
          name: 'Build first project',
          completed: false,
          nbFocus: 2,
          completedFocus: 0,
        },
      ],
      settings: {
        focus_length: 25,
        short_break_length: 5,
        long_break_length: 15,
        long_break_after: 4,
        nextSessionType: 'focus'
      },
      newTaskName: '',
    }
    this.onChangeSettings = this.onChangeSettings.bind(this);
    this.changeNewTask = this.changeNewTask.bind(this);
    this.addTask = this.addTask.bind(this);
  }

  onChangeSettings(e) {
    const target = e.target;
    const value =  target.value;
    const name = target.name;

    this.setState(prevState => ({
      settings: {
        ...prevState.settings,
        [name]: parseInt(value)
      }
    }))
  }

  changeNewTask(name) {
    this.setState(prevState => ({
      ...prevState,
      newTaskName: name
    }));
  }

  addTask(newTaskName) {
    this.setState(prevState => ({
      ...prevState,
      tasks: [...prevState.tasks, { id: 4, name: newTaskName, completed: false, nbFocus: 1, completedFocus: 0 }]
    }))
    this.changeNewTask('');
  }

  render() {
    const { tasks, settings, newTaskName } = this.state;
    const nextTask = tasks.find(task => !task.completed);
    const nextTaskName = nextTask.name;
    const nextTaskNbFocus = nextTask.nbFocus;
    const totalFocus = tasks.map(task => task.completed ? task.nbFocus : task.completedFocus)
                            .reduce((sum, item) => (sum + item));
    const duration = settings.nextSessionType === 'focus' ? settings.focus_length : totalFocus % settings.long_break_after === 0 ? settings.long_break_length : settings.short_break_length;

    return (
      <div className='App'>
        <nav>
          <NavLink exact activeClassName='active-link' to='/'>Timer</NavLink> |
          <NavLink exact activeClassName='active-link' to='/tasks'>Tasks</NavLink> |
          <NavLink exact activeClassName='active-link' to='/settings'>Settings</NavLink>
        </nav>
        <Switch>
          <Route exact path='/' render={() => <Timer nextTaskName={nextTaskName} nextTaskNbFocus={nextTaskNbFocus} duration={duration} />} />
          <Route exact path='/tasks' render={() => <TaskList tasks={tasks} newTaskName={newTaskName} changeNewTask={this.changeNewTask} addTask={this.addTask} />} />
          <Route exact path='/settings' render={() => <Settings settings={settings} onChangeSettings={this.onChangeSettings} />} />
        </Switch>
      </div>
    );
  }
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
