import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import MenuAppBar from './MenuAppBar';
import Announcements from './Announcements';
import Access from './Access';
import Schedule from './Schedule';
import Map from './Map';
import Manual from './Manual';
import UserVote from './UserVote';
import AdminVote from './AdminVote';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      auth: false,
    };
    this.toggleLogIn = this.toggleLogIn.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  toggleLogIn() {
    this.setState({
      isLoggedIn: true,
    });
  }

  handleChange(event, checked) {
    this.setState({ auth: checked });
  }

  render() {
    const content = !this.state.isLoggedIn ? (
      <Access toggleLogIn={this.toggleLogIn} />
    ) : (
      <BrowserRouter>
        <div>
          <MenuAppBar auth={this.state.auth} handleChange={this.handleChange} />
          <div style={{ maxWidth: '90%', margin: 'auto', padding: '20px 0' }}>
            {/* Need to route to Access page (aka Lock Screen) first, before reaching main page. */}
            {/* The way we route to the Access page needs to be improved. */}
            <Route exact path="/" component={Announcements} />
            <Route path="/Schedule" component={Schedule} />
            <Route path="/Map" component={Map} />
            <Route path="/Manual" component={Manual} />
            <Route path="/Vote" component={this.state.auth ? AdminVote : UserVote} />
          </div>
        </div>
      </BrowserRouter>
    );

    return (
      <React.Fragment>
        <CssBaseline />
        { content }
      </React.Fragment>
    );
  }
}

export default App;
