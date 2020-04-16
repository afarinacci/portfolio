import React from 'react';
import logo from './logo.svg';
import './App.scss';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Button, Paper, Grid, Typography } from '@material-ui/core';

import Header from './components/Header';
import Content from './components/Content';

const useStyles = makeStyles({
  helloThereStyle: {
    fontWeight: 'bold',
  },
});

function App() {
  const classes = useStyles();
  return (
    <Grid container direction="column" className="App">
      <Grid item>
        <Header />
      </Grid>
      <Grid item container>
        <Grid item xs={false} sm={2} />
        <Grid item xs={12} sm={8}>
          <Content />
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
    </Grid>
  );
}

export default App;
