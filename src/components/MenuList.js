import React from 'react';
import { Link } from 'react-router-dom';
import { styled, useTheme } from '@mui/material/styles';
import { Box, Drawer, IconButton, List, ListItemButton, ListItemText } from '@mui/material';
import { Close } from '@mui/icons-material';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

function MenuList({open, setOpen, menuItems}) {
  const theme = useTheme();

  return(
    <>
      <Drawer
        anchor='left'
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          width: '100%',
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            padding: theme.spacing(0, 1),
            width: '100%',
            boxSizing: 'border-box',
            border: 'none',
          },
        }}
      >
        <Box
          role="presentation"
          onClick={() => setOpen(false)}
          onKeyDown={() => setOpen(false)}
        >
          <DrawerHeader>
            <IconButton onClick={() => setOpen(false)}>
              <Close />
            </IconButton>
          </DrawerHeader>
          <List>
            {menuItems.map((item) => (
              <ListItemButton
                key={item.text}
                component={Link}
                to={item.path}
                sx={{ borderRadius: '3px' }}
                selected={window.location.pathname === item.path}
              >
                <ListItemText primary={item.text} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  )
}

export default MenuList;
