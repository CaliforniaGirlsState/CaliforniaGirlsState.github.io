import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

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

const UserVote = (props) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Typography variant="h3" gutterBottom>
        Vote Here!
      </Typography>
      <br />
      <div>
        <Input
          placeholder="registration code"
          className={classes.input}
          inputProps={{
            'aria-label': 'registration code',
          }}
        />
        <Button component={Link} to="/NewVote" variant="contained" size="medium" color="primary" className={classes.button}>
          GO TO BALLOT &gt;
        </Button>
      </div>
    </div>
  );
};

UserVote.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserVote);
