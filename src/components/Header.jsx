import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Link,
  Menu,
  MenuItem,
} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  typographyStyles: {
    flex: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose} component={Link} href="#">
            Home
          </MenuItem>
          <MenuItem onClick={handleClose} component={Link} href="#about">
            About
          </MenuItem>
          <MenuItem onClick={handleClose} component={Link} href="#projects">
            Projects
          </MenuItem>
          <MenuItem onClick={handleClose} component={Link} href="#contact">
            Contact
          </MenuItem>
        </Menu>
        <Typography variant="h6" className={classes.title}></Typography>
        <Link
          href="https://www.linkedin.com/in/afarinacci14/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconButton style={{ color: 'white' }}>
            <LinkedInIcon fontSize="large" />
          </IconButton>
        </Link>
        <Link
          href="https://github.com/afarinacci"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconButton style={{ color: 'white' }}>
            <GitHubIcon fontSize="large" />
          </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
