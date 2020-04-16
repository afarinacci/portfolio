import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ProjectCard from './ProjectCard';
import projectList from './../projects';

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
    <Grid container spacing={2}>
      {projectList.map((projectObj) => getProjectCard(projectObj))}
    </Grid>
  );
};

export default Content;
