import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Close, FormatListBulleted, Settings, Timer } from '@material-ui/icons';

const menu = [
  {
    icon: <Timer />,
    text: 'Timer',
    path: '/',
  },
  {
    icon: <FormatListBulleted />,
    text: 'All Tasks',
    path: '/tasks',
  },{
    icon: <Settings />,
    text: 'Settings',
    path: '/settings',
  },
]

const useStyles = makeStyles((theme) => ({
  list: {
    width: '250px',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  menuLink: {
    textDecoration: 'none',
    color: 'inherit',
  },
  item: {
    padding: theme.spacing(1, 4),
  },
}));

function MenuList({toggleDrawer}) {
  const classes = useStyles();

  return (
    <div className={classes.list}>
      <div className={classes.drawerHeader}>
        <IconButton onClick={toggleDrawer(false)}>
          <Close />
        </IconButton>
      </div>
      <List>
        {menu.map((item) => (
          <Link
            key={item.text}
            to={item.path}
            onClick={toggleDrawer(false)}
            className={classes.menuLink}
          >
            <ListItem button key={item.text} className={classes.item}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );
}

export default MenuList;
