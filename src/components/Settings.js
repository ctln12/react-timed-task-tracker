import React from 'react';

function Settings({ settings }) {
  return (
    <div className='Settings'>
      <h1>Settings</h1>
      <form>
        <label for='focus'>Focus length</label>
        <select name="focus_length" id="focus">
          <option value={settings.focus_length}>{`${settings.focus_length} minutes`}</option>
        </select>
        <br/>
        <label for='short'>Short break length</label>
        <select name="short_break_length" id="short">
          <option value={settings.short_break_length}>{`${settings.short_break_length} minutes`}</option>
        </select>
        <br/>
        <label for='long'>Long break length</label>
        <select name="short_break_length" id="long">
          <option value={settings.long_break_length}>{`${settings.long_break_length} minutes`}</option>
        </select>
        <br/>
        <label for='sequence'>Long break after</label>
        <select name="long_break_after" id="sequence">
          <option value={settings.long_break_after}>{`${settings.long_break_after} sessions`}</option>
        </select>
        <br/>
        <input type="submit" value="Save" />
      </form>
    </div>
  );
}

export default Settings;


// import React from 'react';
// import { Button, MenuItem, TextField } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// const numbers = Array.from({length: 120}, (_, i) => i + 1);
// const minutes = numbers.map(number => ({
//   value: number,
//   label: number === 1 ? `${number} minute` : `${number} minutes`
// }));
// const sessions = numbers.map(number => ({
//   value: number,
//   label: number === 1 ? `${number} session` : `${number} sessions`
// }));

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: 'fit-content',
//     margin: theme.spacing(3),
//   },
//   select: {
//     margin: theme.spacing(2, 0),
//   },
//   buttons: {
//     marginTop: theme.spacing(3),
//   },
//   button: {
//     marginBottom: theme.spacing(2),
//     width: '100%',
//   },
//   link: {
//     textDecoration: 'none',
//   },
// }));

// function Settings({ settings, setSettings }) {
//   const classes = useStyles();
//   const getDuration = () => {
//     if (!settings.focusing && settings.sessionCount % settings.nbSessions === 0) {
//       return settings.longBreak;
//     } else {
//       return settings.focusing ? settings.focus : settings.shortBreak;
//     }
//   };
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     async function updateSettings() {
//       const newDuration = getDuration();
//       const response = await axios.put(
//         'https://rails-timed-task-tracker-api.herokuapp.com/api/v1/settings/1',
//         // 'http://localhost:3000/api/v1/settings/1',
//         { focus_time: settings.focus, short_break: settings.shortBreak,
//           long_break: settings.longBreak, number_sessions: settings.nbSessions,
//           duration: newDuration, focusing: settings.focusing, session_count: settings.sessionCount }
//       );
//       setSettings({focus: response.data.focus_time, shortBreak: response.data.short_break, longBreak: response.data.long_break, nbSessions: response.data.number_sessions, duration: response.data.duration, focusing: response.data.focusing, sessionCount: response.data.session_count});
// 		}
// 		updateSettings();
//   };

//   return (
//     <form className={classes.root} onSubmit={handleSubmit}>
//       <TextField
//         id="focus-session-length"
//         label="Focus Session Length"
//         variant="outlined"
//         select
//         fullWidth
//         value={settings.focus}
//         onChange={e => setSettings({...settings, focus: e.target.value})}
//         className={classes.select}
//       >
//         {minutes.map((option) => (
//           <MenuItem key={option.value} value={option.value}>
//             {option.label}
//           </MenuItem>
//         ))}
//       </TextField>
//       <TextField
//         id="short-break-length"
//         label="Short Break Length"
//         variant="outlined"
//         select
//         fullWidth
//         value={settings.shortBreak}
//         onChange={e => setSettings({...settings, shortBreak: e.target.value})}
//         className={classes.select}
//       >
//         {minutes.map((option) => (
//           <MenuItem key={option.value} value={option.value}>
//             {option.label}
//           </MenuItem>
//         ))}
//       </TextField>
//       <TextField
//         id="long-break-length"
//         label="Long Break Length"
//         variant="outlined"
//         select
//         fullWidth
//         value={settings.longBreak}
//         onChange={e => setSettings({...settings, longBreak: e.target.value})}
//         className={classes.select}
//       >
//         {minutes.map((option) => (
//           <MenuItem key={option.value} value={option.value}>
//             {option.label}
//           </MenuItem>
//         ))}
//       </TextField>
//       <TextField
//         id="long-break-after"
//         label="Long Break After"
//         variant="outlined"
//         select
//         fullWidth
//         value={settings.nbSessions}
//         onChange={e => setSettings({...settings, nbSessions: e.target.value})}
//         className={classes.select}
//       >
//         {sessions.map((option) => (
//           <MenuItem key={option.value} value={option.value}>
//             {option.label}
//           </MenuItem>
//         ))}
//       </TextField>
//       <div className={classes.buttons}>
//         <Button type="submit" variant="contained" size="large" className={classes.button}>Save</Button>
//         <Link to="/" className={classes.link}>
//           <Button variant="outlined" size="large" className={classes.button}>Back to timer</Button>
//         </Link>
//       </div>
//     </form>
//   )
// }

// export default Settings;
