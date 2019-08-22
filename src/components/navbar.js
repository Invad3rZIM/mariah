import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { redirect } from '../actions/redirectActions';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function Navbar(props) {
  const { classes } = props;
var navList = (
      <div>
      <Button  color="inherit" onClick={e => redirect("PAST")} >M's Past</Button>

      <Button  color="inherit" onClick={e => redirect("PRESENT")} >M's Present</Button>
          <Button  color="inherit" onClick={e => redirect("FUTURE")} >M's Future</Button>
      </div>
  )
    
  return (
    
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.grow}>
            <Button  color="inherit" onClick={e => redirect("PAST")} ><b>M's Past</b></Button>
            <Button  color="inherit" onClick={e => redirect("PRESENT")} ><b>M's Present</b></Button>
            <Button  color="inherit" onClick={e => redirect("FUTURE")} ><b>M's Future</b></Button>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);