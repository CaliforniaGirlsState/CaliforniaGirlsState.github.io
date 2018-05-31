import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    margin: theme.spacing.unit,
  },
  button: {
    margin: theme.spacing.unit,
  },
});

const AdminVote = (props) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Typography variant="display2" gutterBottom>
        Admin Vote Page!
      </Typography>
    </div>
  );
};

AdminVote.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AdminVote);
