import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MenuAppBar from './MenuAppBar';
import Access from './Access';
import Notices from './Notices';
import Vote from './Vote';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
    			<MenuAppBar />
          <div style={{maxWidth: '90%', margin: 'auto', padding: '20px 0'}}>
            <Route exact path="/" component={Access} />
            {/* Need to change /Notices to /, because it should share with access.. */}
            <Route path="/Notices" component={Notices} />
            <Route path="/Vote" component={Vote} />
          </div>
        </div>
	  	</BrowserRouter>
    );
  }
}

export default App;
