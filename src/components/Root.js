import React from 'react';
import { Router, Route, browserHistory } from 'react-router'

import App from './App';
import Page1 from './Page1';

const Root = React.createClass({
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <Route path="page1" component={Page1}/>
        </Route>
      </Router>
    );
  }
});

export default Root;
