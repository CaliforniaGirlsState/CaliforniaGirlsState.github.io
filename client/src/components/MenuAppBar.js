import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List from 'material-ui/List';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import { WebListItems } from './tileData';

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
    margin: "15px 0",
  },
  emergency: {
    margin: "20px",
  }
};

class MenuAppBar extends React.Component {
  state = {
    auth: true,
    anchorEl: null,
    left: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  handleChange = (event, checked) => {
    this.setState({ auth: checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
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
              src={require("../img/cags_logo_alt.png")}
              alt="CAGS LOGO"
              className={classes.image}
              ></img>
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
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <IconButton
                color="inherit"
                onClick={this.toggleDrawer('left', true)}
              >
                <MenuIcon />
              </IconButton>
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
