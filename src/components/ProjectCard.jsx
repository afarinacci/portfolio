import React from 'react';
import {
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Link,
  Grid,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 345,
  },
}));

const ProjectCard = (props) => {
  const classes = useStyles();
  const {
    projectImgSrc,
    projectImgAlt,
    projectTitle,
    projectDescription,
    projectLink,
  } = props;

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <Link
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer"
          underline="none"
        >
          <CardMedia
            component="img"
            alt={projectImgAlt}
            height="160"
            image={projectImgSrc}
            title={projectTitle}
          />
        </Link>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {projectTitle}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {projectDescription}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Grid container direction="column" justify="center">
          <Grid item>
            <Link
              href={projectLink}
              target="_blank"
              rel="noopener noreferrer"
              underline="none"
            >
              <Button color="primary" endIcon={<OpenInNewIcon />}>
                view project
              </Button>
            </Link>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
