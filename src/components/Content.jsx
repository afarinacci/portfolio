import React from 'react';
import { Typography, Grid, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ProjectCard from './ProjectCard';
import projectList from './../projects';
import About from './About';

const useStyles = makeStyles(() => ({
  typographyStyles: {
    color: 'red',
  },
}));

const Content = () => {
  const classes = useStyles();

  const getProjectCard = (projectObj) => {
    return (
      <Grid item xs={12} sm={6} md={4}>
        <ProjectCard {...projectObj} />
      </Grid>
    );
  };

  return (
    <Grid container spacing={4} direction="column">
      <Grid item id="about">
        <About />
      </Grid>
      <Grid
        item
        container
        spacing={4}
        direction="column"
        id="projects"
        align="center"
      >
        <Grid item>
          <Typography variant="h3">Projects</Typography>
        </Grid>
        <Grid item container spacing={2}>
          {projectList.map((projectObj) => getProjectCard(projectObj))}
        </Grid>
      </Grid>
      <Grid item container spacing={4} direction="column" id="contact">
        <Grid item align="center">
          <Typography variant="h3">Contact</Typography>
        </Grid>
        <Grid item container spacing={2} direction="row" justify="space-evenly">
          <Grid item>
            <Typography variant="body1">
              <span style={{ fontWeight: 'bold' }}>Email:</span>{' '}
              <Link
                href="mailto:afarinac.14@gmail.com"
                underline="none"
                color="secondary"
              >
                afarinac.14@gmail.com
              </Link>
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1">
              <span style={{ fontWeight: 'bold' }}>Tel:</span>
              <Link href="tel:614-316-0750" underline="none" color="secondary">
                {' '}
                (614) 316-0750
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Content;
