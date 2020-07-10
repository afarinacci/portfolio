import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles';
import {
  Switch,
  Grid,
  Typography,
  CssBaseline,
  useScrollTrigger,
  Toolbar,
  Container,
} from '@material-ui/core';

import Header from './components/Header';
import Content from './components/Content';

const useStyles = makeStyles({
  boldText: {
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
      <Header />
      <Container style={{ overflowX: 'hidden', marginBottom: '60px' }}>
        <Grid container direction="column" className="App">
          <Grid
            item
            container
            direction="row"
            justify="flex-end"
            alignItems="center"
          >
            <Typography color="primary" variant="body1">
              Dark Mode:{' '}
            </Typography>
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
      </Container>
    </ThemeProvider>
  );
}

export default App;
