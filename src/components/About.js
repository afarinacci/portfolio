import React from 'react';
import { Typography, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  typographyStyles: {
    color: 'primary',
  },
}));

const Content = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={4} direction="column">
      <Grid item>
        <Typography variant="h3">About Me</Typography>
      </Grid>
      <Grid item container spacing={2} direction="column">
        <Grid item>
          <Typography color="secondary" variant="h5">
            Andrea M. Farinacci
          </Typography>
          <Typography variant="body1">afarinac.14@gmail.com</Typography>
          <Typography variant="body1">(614) 316-0750</Typography>
          <Typography variant="body1">Houston, TX</Typography>
        </Grid>
        <Grid item>
          <Typography color="primary" variant="h5">
            Education
          </Typography>
          <Typography variant="body1">job1</Typography>
          <Typography variant="body1">job2</Typography>
          <Typography variant="body1">job3</Typography>
        </Grid>
        <Grid item>
          <Typography color="primary" variant="h5">
            Work Experience
          </Typography>
          <Typography variant="body1">1</Typography>
          <Typography variant="body1">2</Typography>
          <Typography variant="body1">3</Typography>
        </Grid>
        <Grid item>
          <Typography color="primary" variant="h5">
            Skills
          </Typography>
          <Typography variant="body1">1</Typography>
          <Typography variant="body1">2</Typography>
          <Typography variant="body1">3</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Content;
