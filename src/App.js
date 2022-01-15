import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Timer from "./components/Timer";
import TaskList from './components/TaskList';
import Settings from "./components/Settings";
import Navbar from './components/Navbar';
import { computeDuration, countFocus } from './helper/timer';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      settings: {},
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

  componentDidMount() {
    // axios.get('http://localhost:3000/api/v1/tasks')
    axios.get('https://rails-timed-task-tracker-api.herokuapp.com/api/v1/tasks')
         .then(response => {
           this.setState(prevState => ({
             ...prevState,
             tasks: response.data
           }))
         })
    // axios.get('http://localhost:3000/api/v1/sessions/current')
    axios.get('https://rails-timed-task-tracker-api.herokuapp.com/api/v1/sessions/current')
         .then(response => {
           this.setState(prevState => ({
             ...prevState,
             settings: {
               session_id: response.data.id,
               focusLength: response.data.settings.focus_length,
               shortBreakLength: response.data.settings.short_break_length,
               longBreakLength: response.data.settings.long_break_length,
               longBreakAfter: response.data.settings.long_break_after,
               isFocusing: true
             },
           }))
         })
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
    const session_id = this.state.settings.session_id;
    // axios.patch(`http://localhost:3000/api/v1/sessions/${session_id}`,
    axios.patch(`https://rails-timed-task-tracker-api.herokuapp.com/api/v1/sessions/${session_id}`,
      {
        focus_length: this.state.settings.focusLength,
        short_break_length: this.state.settings.shortBreakLength,
        long_break_length: this.state.settings.longBreakLength,
        long_break_after: this.state.settings.longBreakAfter
        // is_focusing: this.state.settings.isFocusing
      })
    .then(response => {
      this.setState(prevState => ({
        ...prevState,
        settings: {
          session_id: response.data.id,
          focusLength: response.data.settings.focus_length,
          shortBreakLength: response.data.settings.short_break_length,
          longBreakLength: response.data.settings.long_break_length,
          longBreakAfter: response.data.settings.long_break_after,
          isFocusing: true
        },
      }))
    })
  }

  changeNewTask(name) {
    this.setState(prevState => ({
      ...prevState,
      newTaskName: name
    }));
  }

  addTask(newTaskName) {
    // axios.post('http://localhost:3000/api/v1/tasks',
    axios.post('https://rails-timed-task-tracker-api.herokuapp.com/api/v1/tasks',
      {
        name: newTaskName,
      })
    .then(response => {
      this.setState(prevState => ({
        ...prevState,
        tasks: [...prevState.tasks, response.data]
      }))
    })
    this.changeNewTask('');
  }

  editTask(updatedTask) {
    // axios.patch(`http://localhost:3000/api/v1/tasks/${updatedTask.id}`,
    axios.patch(`https://rails-timed-task-tracker-api.herokuapp.com/api/v1/tasks/${updatedTask.id}`,
    {
      task: updatedTask
    })
    .then(response => {
      const updatedTasks = this.state.tasks.map(task => task.id === response.data.id ? response.data : task);
      this.setState(prevState => ({
        ...prevState,
        tasks: updatedTasks
      }))
    })
  }

  deleteTask(task_id) {
    // axios.delete(`http://localhost:3000/api/v1/tasks/${task_id}`)
    axios.delete(`https://rails-timed-task-tracker-api.herokuapp.com/api/v1/tasks/${task_id}`)
         .then(_response => {
          // axios.get('https://rails-timed-task-tracker-api.herokuapp.com/api/v1/tasks')
          axios.get('http://localhost:3000/api/v1/tasks')
               .then(response => {
                 this.setState(prevState => ({
                   ...prevState,
                   tasks: response.data
                 }))
               })
         })
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
    task.pomodoros += 1;
    task.done = task.pomodoros === task.completed && task.pomodoros !== 0;
    this.editTask(task);
    e.preventDefault();
  }

  handleMinusClick(e, task) {
    task.pomodoros -= 1;
    task.done = task.pomodoros === task.completed && task.pomodoros !== 0;
    this.editTask(task);
    task.done && alert(`${task.name} - ${task.completed} / ${task.pomodoros} - Completed!`);
    e.preventDefault();
  }

  render() {
    const { tasks, settings, newTaskName } = this.state;
    const nextTask = tasks.find(task => !task.done);
    const totalFocus = countFocus(tasks);
    console.log('Total focus session number: ' + totalFocus);
    const duration = computeDuration(settings, totalFocus) || 25;
    const hasTasks = tasks.length !== 0;
    const hasUncompletedTasks = tasks.some(task => !task.done);

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
