import React from 'react';
import { Typography, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  typographyStyles: {
    color: 'red',
  },
}));

const Content = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={4} direction="column">
      <Grid item>
        <Typography variant="h3">About</Typography>
      </Grid>
      <Grid item container spacing={2} id="about" direction="column">
        <Grid item>
          <Typography class={classes.typographyStyles}>
            Andrea M. Farinacci
          </Typography>
        </Grid>
        <Grid item>
          <Typography>afarinac.14@gmail.com</Typography>
        </Grid>
        <Grid item>
          <Typography>Houston, TX</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Content;
