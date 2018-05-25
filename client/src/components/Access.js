import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { LockOutline, Visibility, VisibilityOff } from '@material-ui/icons';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  withoutLabel: {
    marginTop: theme.spacing.unit * 3,
  },
  textField: {
    flexBasis: 200,
  },
});

class Access extends Component {
  state = {
    password: '',
    showPassword: false,
  };

  handleChange = prop => (event) => {
    this.setState({ [prop]: event.target.value });
  };

  handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  handleClickShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <LockOutline style={{ fontSize: 92 }} />
        <FormControl className={classNames(classes.margin, classes.textField)}>
          <InputLabel htmlFor="adornment-password">Password</InputLabel>
          <Input
            id="adornment-password"
            type={this.state.showPassword ? 'text' : 'password'}
            value={this.state.password}
            onChange={this.handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="Toggle password visibility"
                  onClick={this.handleClickShowPassword}
                  onMouseDown={this.handleMouseDownPassword}
                >
                  {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
          <Button
            variant="raised"
            color="primary"
            className={classes.withoutLabel}
            onClick={this.props.toggleLogIn}
          >
            Enter
          </Button>
        </FormControl>
      </div>
    );
  }
}

Access.propTypes = {
  classes: PropTypes.object.isRequired,
  toggleLogIn: PropTypes.func.isRequired,
};


export default withStyles(styles)(Access);
