import React from 'react';
import { Link } from 'react-router-dom';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import HomeIcon from '@material-ui/icons/Home';
import Icon from 'material-ui/Icon';

export const WebListItems = (
  <div>
    <ListItem component={ Link } to="/" button>
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItem>
    <ListItem component={ Link } to="/Schedule" button>
      <ListItemIcon>
        <Icon>schedule</Icon>
      </ListItemIcon>
      <ListItemText primary="Schedule" />
    </ListItem>
    <ListItem component={ Link } to="/Map" button>
      <ListItemIcon>
        <Icon>map</Icon>
      </ListItemIcon>
      <ListItemText primary="Map" />
    </ListItem>
    <ListItem component={ Link } to="/Manual" button>
      <ListItemIcon>
        <Icon>library_books</Icon>
      </ListItemIcon>
      <ListItemText primary="Manual" />
    </ListItem>
    <ListItem component={ Link } to="/Vote" button>
      <ListItemIcon>
        <Icon>how_to_vote</Icon>
      </ListItemIcon>
      <ListItemText primary="Vote" />
    </ListItem>
  </div>
);
