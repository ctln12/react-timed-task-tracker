import React from 'react';

function TimerCurrentTask({ taskName, taskNbFocus }) {
  const pluralize = (n, word, suffix = 's') =>
  `${n} ${word}${n !== 1 ? suffix : ''}`;

  return (
    <div className='TimerCurrentTask'>
      <p>{taskName}</p>
      <p><button>+</button> {pluralize(taskNbFocus, 'session')} <button>-</button></p>
    </div>
  );
}

export default TimerCurrentTask;
