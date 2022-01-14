import { Menu, Settings } from '@mui/icons-material';
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';
// import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1, mt: 4 }}>
      <AppBar position="static" color="transparent" sx={{ boxShadow: 0 }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Timer
          </Typography>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="settings"
            sx={{ ml: 2 }}
          >
            <Settings />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
    // <nav className='Navbar'>
    //   <NavLink exact activeClassName='active-link' to='/'>Timer</NavLink> |
    //   <NavLink exact activeClassName='active-link' to='/tasks'>Tasks</NavLink> |
    //   <NavLink exact activeClassName='active-link' to='/settings'>Settings</NavLink>
    // </nav>
  );
}

export default Navbar;


// import React, { useState } from 'react';
// import { Link, Route, Switch } from 'react-router-dom';
// import { makeStyles } from '@material-ui/core/styles';
// import { AppBar, Grid, IconButton, SwipeableDrawer, Toolbar, Typography } from '@material-ui/core';
// import { Menu, Settings } from '@material-ui/icons';
// import MenuList from './MenuList';
// import TodoList from './TodoList';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   settingsLink: {
//     color: 'inherit',
//   },
//   title: {
//     flexGrow: 1,
//   },
// }));

// function Navbar() {
//   const classes = useStyles();
//   const [state, setState] = useState(false);
//   const toggleDrawer = (open) => (event) => {
//     if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//       return;
//     }

//     setState(open);
//   };

//   return (
//     <div className={classes.root}>
//       <AppBar position="static" color="inherit" elevation={0}>
//         <Grid container justifyContent='center'>
//           <Grid item xs={11} sm={8} md={6} lg={4}>
//             <Toolbar>
//               <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)} className={classes.menuButton}>
//                 <Menu />
//               </IconButton>
//               <SwipeableDrawer
//                 anchor="left"
//                 open={state}
//                 onClose={toggleDrawer(false)}
//                 onOpen={toggleDrawer(true)}
//               >
//                 <MenuList toggleDrawer={toggleDrawer} />
//               </SwipeableDrawer>
//               <Typography variant="h6" className={classes.title}>
//                 <Switch >
//                   <Route exact path="/" render={() => <h1>Timer</h1>} children={() => 'Timer'} />
//                   <Route exact path="/settings" render={() => <h1>Timer Settings</h1>} children={() => 'Settings'} />
//                   <Route exact path="/tasks" render={() => <TodoList />} children={() => 'All tasks'} />
//                 </Switch>
//               </Typography>
//               <Link to="/settings" className={classes.settingsLink}>
//                 <IconButton edge="end" aria-label="settings" color="inherit">
//                   <Settings />
//                 </IconButton>
//               </Link>
//             </Toolbar>
//           </Grid>
//         </Grid>
//       </AppBar>
//     </div>
//   );
// }

// export default Navbar;
