import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import { Menu, Settings } from '@mui/icons-material';
import MenuList from './MenuList';
import { menuItems } from '../helper/menuItems';

function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <Box>
      <AppBar position="static" sx={{ boxShadow: 0, flexGrow: 1, mb: 1, pt: 2, pb: 1, px: 2 }}>
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
            {menuItems.find(item => location.pathname === item.path).text}
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
      <MenuList open={open} setOpen={setOpen} menuItems={menuItems} />
    </Box>
  );
}

export default Navbar;
