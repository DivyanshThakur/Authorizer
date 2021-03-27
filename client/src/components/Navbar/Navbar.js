import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import {useHistory, Link} from 'react-router-dom';
import useStyles from './styles';

export default function Navbar({user, setUser}) {
  const classes = useStyles();
  const history = useHistory();

  const logout = () => {
    localStorage.clear();
    
    setUser(null);
    history.push("/");
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                component={Link}
                to="/"
                color="inherit"
                className="home"
              >
                <HomeIcon />
              </IconButton>
              <Typography className={classes.title} variant="h5" color="inherit">
            Authorizer
          </Typography>
          {
            user ? (
              <React.Fragment>
                <Typography variant="h6" color="inherit">Welcome {user.name}</Typography>
              <Button className={classes.logoutButton} color="inherit" component={Link} onClick={logout} to="/">Logout</Button>
              </React.Fragment>
            ) : (
              <React.Fragment>
              <Button color="inherit" component={Link} to="/login">Login</Button>
              <Button color="inherit" component={Link} to="/register">Register</Button>
              </React.Fragment>
            )
          }
        </Toolbar>
      </AppBar>
    </div>
  );
}
