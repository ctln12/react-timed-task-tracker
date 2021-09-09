import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import { Menu, Settings } from '@material-ui/icons';
import TodoApp from './TodoApp';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  settingsLink: {
    color: 'inherit',
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <Menu />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Switch >
              <Route exact path="/" render={() => <h1>Timer</h1>} children={() => 'Timer'} />
              <Route exact path="/settings" render={() => <h1>Timer Settings</h1>} children={() => 'Settings'} />
              <Route exact path="/tasks" render={() => <TodoApp />} children={() => 'All tasks'} />
            </Switch>
          </Typography>
          <Link to="/settings" className={classes.settingsLink}>
            <IconButton edge="end" aria-label="settings" color="inherit">
              <Settings />
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
