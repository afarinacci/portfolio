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
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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
        <CardMedia
          component="img"
          alt={projectImgAlt}
          height="140"
          image={projectImgSrc}
          title={projectTitle}
        />
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
        <Link
          href={projectLink}
          target="_blank"
          rel="noopener"
          rel="noreferrer"
          underline="none"
        >
          <Button variant="contained" color="primary" fullWidth>
            Go to project website
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
