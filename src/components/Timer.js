import React, { useState } from 'react';
import TimerCountDown from './TimerCountDown';
import TimerHeader from './TimerHeader';
import { Container } from '@mui/material';

function Timer({ nextTask, duration, editTask, isFocusing, toggleIsFocusing, hasTasks, hasUncompletedTasks, handlePlusClick, handleMinusClick }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <Container maxWidth="sm" sx={{minHeight: 'calc(100vh - 90px)', display: 'flex', flexDirection: 'column'}}>
      <TimerHeader
        nextTask={nextTask}
        editTask={editTask}
        isFocusing={isFocusing}
        hasTasks={hasTasks}
        hasUncompletedTasks={hasUncompletedTasks}
        handlePlusClick={handlePlusClick}
        handleMinusClick={handleMinusClick}
        isPlaying={isPlaying}
      />
      <TimerCountDown
        duration={duration}
        isFocusing={isFocusing}
        nextTask={nextTask}
        editTask={editTask}
        toggleIsFocusing={toggleIsFocusing}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
    </Container>
  );
}

export default Timer;


// import React from 'react';
// import { CountdownCircleTimer } from "react-countdown-circle-timer";
// import { Button, Typography } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
// import useTimerState from '../hooks/useTimerState';
// import axios from 'axios';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     margin: theme.spacing(3),
//     height: 'calc(100vh - 125px)',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   },
//   buttons: {
//     marginTop: theme.spacing(2),
//     display: 'flex',
//     gap: '1rem',
//     '& button': {
//       flexGrow: 1,
//     },
//   },
// }));

// function Timer({ settings, setSettings }) {
//   const classes = useStyles();
//   const {key, isPlaying, setIsPlaying, renderTime, stopTimer, playSound, getDuration, getMessage} = useTimerState(settings);
//   const message = getMessage();
//   const handleComplete = () => {
//     playSound();
//     async function updateSettings() {
//       const newDuration = getDuration();
//       const newCount = settings.focusing ? settings.sessionCount + 1 : settings.sessionCount;
//         const response = await axios.put(
//          'https://rails-timed-task-tracker-api.herokuapp.com/api/v1/settings/1',
// 				// 'http://localhost:3000/api/v1/settings/1',
// 				{ duration: newDuration, focusing: !settings.focusing, session_count: newCount }
//       );
//       setSettings({...settings, duration: response.data.duration, focusing: response.data.focusing, sessionCount: response.data.session_count});
//       stopTimer();
//     }
//     updateSettings();
//   };

//   return (
//     <div className={classes.root}>
//       <Typography gutterBottom={true} variant="h5" align="center">
//         {message}
//       </Typography>
//       <div>
//         <CountdownCircleTimer
//           key={key}
//           duration={settings.duration * 60}
//           isPlaying={isPlaying}
//           onComplete={handleComplete}
//           colors="#A5A5A5"
//           size={240}
//           strokeWidth={12}
//           ariaLabel="count down timer"
//         >
//           {renderTime}
//         </CountdownCircleTimer>
//       </div>
//       <div className={classes.buttons}>
//         <Button variant="contained" size="large" onClick={() => setIsPlaying(!isPlaying)}>
//           {isPlaying ? 'Pause' : 'Start'}
//         </Button>
//         { settings.focusing ?
//           <Button variant="contained" size="large" onClick={stopTimer}>Stop</Button>
//           :
//           <Button variant="contained" size="large" onClick={handleComplete}>Skip</Button>
//         }
//       </div>
//     </div>
//   )
// }

// export default Timer;
