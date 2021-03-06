import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Appbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            Shoe Market Hub
          </Typography>

          <Button><NavLink style={{ textDecoration: 'none', color: 'white', margin: 5 }} to="/">Home</NavLink></Button>

          <Button>
            <NavLink style={{
              textDecoration: 'none', color: 'white', margin: 5
            }} to="/product">Products</NavLink></Button>

          <Button><NavLink style={{
            textDecoration: 'none', color: 'white', margin: 5
          }} to="/about">About Us</NavLink></Button>

        </Toolbar>
      </AppBar>
    </div >
  );
}
