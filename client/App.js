import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import Posts from './components/Posts/Posts'
import Post from './components/Posts/Post'
import memories from './images/memories.png' 
const App = () => {
  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="inherit">
        <img src={memories} alt="memories" height="60" width="100" />
        <Typography variant="h2" align="center">
          Memories
        </Typography>
         
      </AppBar>
      <AppBar>
      <Post/>
      <Form/>
      </AppBar>
   
    </Container>
  );
  
}
export default App;