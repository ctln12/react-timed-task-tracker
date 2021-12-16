import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Timer from "./components/Timer";
import TaskList from './components/TaskList';
import Settings from "./components/Settings";
import Navbar from './components/Navbar';
import { computeDuration, countFocus } from './helper/timer';

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
        focusLength: 25,
        shortBreakLength: 5,
        longBreakLength: 15,
        longBreakAfter: 4,
        isFocusing: true
      },
      newTaskName: ''
    }
    this.changeSettings = this.changeSettings.bind(this);
    this.saveSettings = this.saveSettings.bind(this);
    this.changeNewTask = this.changeNewTask.bind(this);
    this.addTask = this.addTask.bind(this);
    this.editTask = this.editTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.toggleIsFocusing = this.toggleIsFocusing.bind(this);
    this.handlePlusClick = this.handlePlusClick.bind(this);
    this.handleMinusClick = this.handleMinusClick.bind(this);
  }

  changeSettings(option) {
    const value =  option.value;
    const name = option.name;

    this.setState(prevState => ({
      ...prevState,
      settings: {
        ...prevState.settings,
        [name]: parseInt(value)
      }
    }))
  }

  saveSettings() {
    // Call to API for persistence
    alert(`Settings saved!`);
  }

  changeNewTask(name) {
    this.setState(prevState => ({
      ...prevState,
      newTaskName: name
    }));
  }

  addTask(newTaskName) {
    const nextId = this.state.tasks[this.state.tasks.length - 1].id + 1;
    this.setState(prevState => ({
      ...prevState,
      tasks: [...prevState.tasks, { id: nextId, name: newTaskName, completed: false, nbFocus: 0, completedFocus: 0 }]
    }))
    this.changeNewTask('');
  }

  editTask(updatedTask) {
    const updatedTasks = this.state.tasks.map(task => task.id === updatedTask.id ? updatedTask : task);
    this.setState(prevState => ({
      ...prevState,
      tasks: updatedTasks
    }))
  }

  deleteTask(task_id) {
    const updatedTasks = this.state.tasks.filter(task => task.id !== task_id);
    this.setState(prevState => ({
      ...prevState,
      tasks: updatedTasks
    }))
  }

  toggleIsFocusing() {
    this.setState(prevState => ({
      ...prevState,
      settings: {
        ...prevState.settings,
        isFocusing: !prevState.settings.isFocusing
      }
    }))
  }

  handlePlusClick(e, task) {
    task.nbFocus += 1;
    task.completed = task.nbFocus === task.completedFocus && task.nbFocus !== 0;
    this.editTask(task);
    e.preventDefault();
  }

  handleMinusClick(e, task) {
    task.nbFocus -= 1;
    task.completed = task.nbFocus === task.completedFocus && task.nbFocus !== 0;
    this.editTask(task);
    task.completed && alert(`${task.name} - ${task.completedFocus} / ${task.nbFocus} - Completed!`);
    e.preventDefault();
  }

  render() {
    const { tasks, settings, newTaskName } = this.state;
    const nextTask = tasks.find(task => !task.completed);
    const totalFocus = countFocus(tasks);
    console.log('Total focus session number: ' + totalFocus);
    const duration = computeDuration(settings, totalFocus);
    const hasTasks = tasks.length !== 0;
    const hasUncompletedTasks = tasks.some(task => !task.completed);

    return (
      <div className='App'>
        <Navbar />
        <Switch>
          <Route exact path='/' render={() => {
            return  <Timer
                      nextTask={nextTask}
                      duration={duration}
                      editTask={this.editTask}
                      isFocusing={settings.isFocusing}
                      toggleIsFocusing={this.toggleIsFocusing}
                      hasTasks={hasTasks}
                      hasUncompletedTasks={hasUncompletedTasks}
                      handlePlusClick={this.handlePlusClick}
                      handleMinusClick={this.handleMinusClick}
                    />;
          }} />
          <Route exact path='/tasks' render={() => {
            return  <TaskList
                      tasks={tasks}
                      newTaskName={newTaskName}
                      changeNewTask={this.changeNewTask}
                      addTask={this.addTask}
                      editTask={this.editTask}
                      deleteTask={this.deleteTask}
                      handlePlusClick={this.handlePlusClick}
                      handleMinusClick={this.handleMinusClick}
                    />;
          }} />
          <Route exact path='/settings' render={() => {
            return  <Settings
                      settings={settings}
                      changeSettings={this.changeSettings}
                      saveSettings={this.saveSettings}
                    />;
          }} />
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
