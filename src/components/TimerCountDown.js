import React from 'react';

function TimerCountDown({ duration }) {
  return (
    <div className='TimerCountDown'>
      <p>{duration}:00</p>
      <button>Start</button>
      <button>Pause</button>
      <button>Stop</button>
      <button>Skip</button>
    </div>
  );
}

export default TimerCountDown;
