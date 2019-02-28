import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/DeleteForeverOutlined';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

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
  constructor(props) {
    super(props);

    this.classes = this.props.classes;
    
    this.state = {
      count: 5,
      rows: [
        { id: 0, name: 'President' },
        { id: 1, name: 'Vice President' },
        { id: 2, name: 'Department of State' },
        { id: 3, name: 'Department of Defense' },
        { id: 4, name: 'Department of the Treasury' },
      ],
    };

    this.createData = this.createData.bind(this);
  }

  async createData() {
    let newData;
    await fetch('/test')
          .then(res => res.text())
          .then(json => { newData = JSON.parse(json) });

    
    this.setState({
      count: this.state.count + 1,
      // rows: [...this.state.rows, { id: this.state.count, name }],
      rows: [...this.state.rows, { id: this.state.count, ...newData }],
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
        <h3>
          Add new ballot
        </h3>
        <Fab color="primary" aria-label="Add" onClick={this.createData}>
          <AddIcon />
        </Fab>
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
                  <TableRow key={row.id} hover component={Link} to={`/Vote/${row.id}`}>
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
