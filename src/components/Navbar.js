import React, { useState } from "react";
import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import ListItem from "@material-ui/core/ListItem";
import { makeStyles } from "@material-ui/core/styles";
import { MaterialUISwitch } from "./MaterialUISwitch";
import { FormControlLabel } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appbar: {
    boxShadow: 'none',
    color: 'transparent'
  },
  toolbar: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    [theme.breakpoints.between('sm', 'md')]: {
      justifyContent: 'space-between'
    },
    [theme.breakpoints.between('xs', 'sm')]: {
      justifyContent: 'space-between'
    }
  },
  listItem: {
    width: '15%',
    justifyContent: 'center',
    fontFamily: 'Raleway',
    color: '#343434',
    '&:hover': {
      fontWeight: 'bold'
    },
    /* media-dependent */
    fontSize: '20px',
    [theme.breakpoints.between('sm', 'md')]: {
      width: '22%'
    },
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: '12px',
      width: '20%'
    }
  },
  lightToggle: {
    width: '20%',
    justifyContent: 'center',
    '&:hover': {
      cursor: 'pointer'
    },
    [theme.breakpoints.between('sm', 'md')]: {
      width: '10%'
    },
    [theme.breakpoints.between('xs', 'sm')]: {
      width: '100%'
    }
  }
}));

const menuItems = [
  {  listText: 'Home', listPath: '/' },
  {  listText: 'Portfolio', listPath: '/portfolio' },
  {  listText: 'Resume', listPath: '/resume' },
  {  listText: 'About', listPath: '/about' },
];

const Navbar = () => {

  const [currTheme, setCurrTheme] = useState('light');

  function changeTheme() {
    if (currTheme === 'light') {
      localStorage.setItem('theme', 'dark');
      setCurrTheme('dark');
    } else {
      localStorage.setItem('theme', 'light');
      setCurrTheme('light');
    }
  }
  const classes = useStyles();

  return (
    <React.Fragment>
      <Box component='nav'>
        <AppBar 
          position='static' 
          className={classes.appbar}
          color='transparent'
        >
          <Toolbar className={classes.toolbar}>
          {/* <ListItem 
            key='Varsha'
            className={classes.logo}
            component={Link}
            to={'/'}
          > Varsha
          </ListItem> */}
            {menuItems.map((item, i) => (
              <ListItem
                key={i}
                className={classes.listItem}
                component={Link}
                to={item.listPath}
              >
                {item.listText}
              </ListItem>
            ))}
            <FormControlLabel
              className={classes.lightToggle}
              control={<MaterialUISwitch />}
              onClick={changeTheme}
            />
          </Toolbar>
        </AppBar>
      </Box>
    </React.Fragment>
  );
};

export default Navbar;
