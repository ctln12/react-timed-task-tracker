const countFocus = (tasks) => {
  return tasks.map(task => task.done ? task.pomodoros : task.completed)
              .reduce((sum, item) => (sum + item), 0, 0);
}

const computeDuration = (settings, totalFocus) => {
  return settings.isFocusing ? settings.focusLength : totalFocus % settings.longBreakAfter === 0 ? settings.longBreakLength : settings.shortBreakLength;
}

export { countFocus, computeDuration };
