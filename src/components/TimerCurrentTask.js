import React from 'react';
import { pluralize } from "../helper/pluralize";

function TimerCurrentTask({ taskName, taskNbFocus }) {
  return (
    <div className='TimerCurrentTask'>
      <p>{taskName}</p>
      <p><button>+</button> {pluralize(taskNbFocus, 'session')} <button>-</button></p>
    </div>
  );
}

export default TimerCurrentTask;
