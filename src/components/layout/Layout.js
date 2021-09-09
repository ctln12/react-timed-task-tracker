import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from '../Navbar';

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    height: 'calc(100vh - 64px)',
  },
}));

const Layout =({children}) =>{
  const classes = useStyles();
  return(
    <>
      <Navbar/>
      <main>
        <Grid container justifyContent='center' className={classes.gridContainer}>
          <Grid item xs={11} sm={8} md={6} lg={4}>
            {children}
          </Grid>
        </Grid>
      </main>
    </>
  )
}

export default Layout;
