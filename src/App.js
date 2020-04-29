import React, { useState } from 'react';
import logo from './logo.svg';
import './App.scss';

import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {
  Switch,
  Button,
  Paper,
  Grid,
  Typography,
  CssBaseline,
} from '@material-ui/core';

import Header from './components/Header';
import Content from './components/Content';

const useStyles = makeStyles({
  helloThereStyle: {
    fontWeight: 'bold',
  },
});

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const theme = createMuiTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
    },
  });
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Grid container direction="column" className="App">
        <Grid item>
          <Header />
        </Grid>
        <Grid
          item
          container
          direction="row"
          justify="flex-end"
          alignItems="center"
        >
          <Typography color="primary">Dark Mode: </Typography>
          <Switch
            color="primary"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          ></Switch>
        </Grid>
        <Grid item container>
          <Grid item xs={false} sm={2} />
          <Grid item xs={12} sm={8}>
            <Content />
          </Grid>
          <Grid item xs={false} sm={2} />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
