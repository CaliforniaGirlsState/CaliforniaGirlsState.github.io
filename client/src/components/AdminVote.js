import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/DeleteForeverOutlined';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

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
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

class AdminVote extends React.Component {
  state = {
    count: 5,
    rows: [
      { id: 0, name: 'President' },
      { id: 1, name: 'Vice President' },
      { id: 2, name: 'Department of State' },
      { id: 3, name: 'Department of Defense' },
      { id: 4, name: 'Department of the Treasury' },
    ],
  }

  classes = this.props.classes;

  createData(name) {
    this.setState({
      count: this.state.count + 1,
      rows: [...this.state.rows, { id: this.state.count, name }],
    });
  }

  deleteData(target) {
    const { count, rows } = this.state;

    this.setState({
      count: count - 1,
      rows: rows.filter(el => el.id !== target.id || el.name !== target.name),
    });
  }

  render() {
    return (
      <div className={this.classes.root}>
        <Table className={this.classes.table}>
          <TableHead>
            <TableRow>
              <CustomTableCell>Ballot Name</CustomTableCell>
              <CustomTableCell numeric>Creation Date</CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              this.state.rows.length ?
                this.state.rows.map(row => (
                  <TableRow key={row.id}>
                    <CustomTableCell component="th" scope="row">
                      <IconButton onClick={() => this.deleteData({ id: row.id, name: row.name })}>
                        <DeleteIcon />
                      </IconButton>
                      {row.name}
                    </CustomTableCell>
                    <CustomTableCell numeric>
                      {(new Date()).toDateString()}
                    </CustomTableCell>
                  </TableRow>
                ))
              :
                <TableRow>
                  <CustomTableCell colSpan={2}>
                    There are no ballots to view.
                  </CustomTableCell>
                </TableRow>
            }
          </TableBody>
        </Table>
      </div>
    );
  }
}

AdminVote.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AdminVote);
