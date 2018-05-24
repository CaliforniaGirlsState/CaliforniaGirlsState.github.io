import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import MenuAppBar from './MenuAppBar';
import Announcements from './Announcements';
import Access from './Access';
import Schedule from './Schedule';
import Map from './Map';
import Manual from './Manual';
import Vote from './Vote';


const App = () => (
  <React.Fragment>
    <CssBaseline />
    <BrowserRouter>
      <div>
        <MenuAppBar />
        <div style={{ maxWidth: '90%', margin: 'auto', padding: '20px 0' }}>
          {/* Need to route to Access page (aka Lock Screen) first, before reaching main page. */}
          {/* The way we route to the Access page needs to be improved. */}
          <Route exact path="/" component={Announcements} />
          <Route path="/Access" component={Access} />
          <Route path="/Schedule" component={Schedule} />
          <Route path="/Map" component={Map} />
          <Route path="/Manual" component={Manual} />
          <Route path="/Vote" component={Vote} />
        </div>
      </div>
    </BrowserRouter>
  </React.Fragment>
);

export default App;
