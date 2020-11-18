import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';
import Form from './components/Form/Form'
import Posts from './components/Posts/Posts'
import memories from './images/memories.png' 
import userStyles from './styles'



const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = userStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

return (
  <Container maxWidth="lg">
    <AppBar className={classes.appBar} position="static" color="inherit">
      <img className={classes.image} src={memories} alt="memories" height="60" width="100" />
      <Typography className={classes.heading} variant="h2" align="center">
        Memories
      </Typography>
    </AppBar>
    <Grow in>
      <Grid container justify="space-between" alignItems="stretch" spacing={3}>
        <Grid item xs={12} sm={7}>
          <Posts />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Form />
        </Grid>
      </Grid>
    </Grow>
  </Container>
);

}
export default App;