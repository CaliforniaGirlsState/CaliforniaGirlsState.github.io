import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import MenuAppBar from './MenuAppBar';
import Announcements from './Announcements';
import Access from './Access';
import Schedule from './Schedule';
import Map from './Map';
import Manual from './Manual';
import Vote from './Vote';

/* TODO: Determine somewhat secure way to determine
 * if code was entered correctly */

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
    };
    this.toggleLogIn = this.toggleLogIn.bind(this);
  }

  toggleLogIn() {
    this.setState({
      isLoggedIn: true,
    });
  }

  render() {
    const content = !this.state.isLoggedIn ? (
      <Access toggleLogIn={this.toggleLogIn} />
    ) : (
      <BrowserRouter>
        <div>
          <MenuAppBar />
          <div style={{ maxWidth: '90%', margin: 'auto', padding: '20px 0' }}>
            {/* Need to route to Access page (aka Lock Screen) first, before reaching main page. */}
            {/* The way we route to the Access page needs to be improved. */}
            <Route exact path="/" component={Announcements} />
            <Route path="/Schedule" component={Schedule} />
            <Route path="/Map" component={Map} />
            <Route path="/Manual" component={Manual} />
            <Route path="/Vote" component={Vote} />
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
