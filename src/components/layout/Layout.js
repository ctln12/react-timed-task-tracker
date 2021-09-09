import React from 'react';
import { Grid } from '@material-ui/core';
import Navbar from '../Navbar';

const Layout =({children}) =>{
  return(
    <>
      <Navbar/>
      <main>
        <Grid container justifyContent='center'>
          <Grid item xs={11} sm={8} md={6} lg={4}>
            {children}
          </Grid>
        </Grid>
      </main>
    </>
  )
}

export default Layout;
