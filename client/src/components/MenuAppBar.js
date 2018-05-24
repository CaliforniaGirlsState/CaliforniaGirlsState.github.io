import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import WebListItems from './tileData';

const cagsLogoAlt = require('../img/cags_logo_alt.png');

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  list: {
    width: 250,
  },
  image: {
    margin: '15px 0',
  },
  emergency: {
    margin: '20px',
  },
};

class MenuAppBar extends Component {
  state = {
    left: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div>
        <div className={classes.list}>
          <Divider />
          <List>{ WebListItems }</List>
          <Divider />
        </div>
      </div>
    );

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
            <img
              src={cagsLogoAlt}
              alt="CAGS LOGO"
              className={classes.image}
            />
            <div
              tabIndex={0}
              role="button"
              onClick={this.toggleDrawer('left', false)}
              onKeyDown={this.toggleDrawer('left', false)}
            >
              { sideList }
            </div>
            <div className={classes.emergency}>
              Emergency Contacts:
              <br />
              John Doe - 415-000-0000
            </div>
          </Drawer>

          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              onClick={this.toggleDrawer('left', true)}
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.flex}>
              California Girl State
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuAppBar);
