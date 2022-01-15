import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import { Menu, Settings } from '@mui/icons-material';
import MenuList from './MenuList';
import { menuItems } from '../helper/menuItems';

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Box sx={{ flexGrow: 1, mt: 4 }}>
        <AppBar position="static" color='inherit' sx={{ boxShadow: 0 }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => setOpen(true)}
              sx={{ mr: 2 }}
            >
              <Menu />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {menuItems.find(item => window.location.pathname === item.path).text}
            </Typography>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="settings"
              sx={{ ml: 2 }}
              component={Link}
              to='/settings'
            >
              <Settings />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      <MenuList open={open} setOpen={setOpen} menuItems={menuItems} />
    </div>
  );
}

export default Navbar;
