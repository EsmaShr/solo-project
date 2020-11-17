import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

import memories from './images/memories.png' 
const App = () => {
  return (
   <Container maxWidth= 'lg'>
   <AppBar position= 'static' color = 'inherit'>
   <img src= {memories} alt='memories' height= '60' width='100'/>
   <Typography variant= 'h2' align= 'center'>Memories</Typography>

   </AppBar> 
   <Grow in>
      <Grid container justify="space-between" alignItems="stretch" spacing={3}>
      </Grid>
   </Grow>
   </Container>
  )
}
export default App;