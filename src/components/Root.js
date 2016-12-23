import React from 'react';
import { Router, browserHistory } from 'react-router';
import routes from '../routes';


const Root = React.createClass({
  render() {
    return (
      <Router history={browserHistory} >
        {routes}
      </Router>
    );
  }
});

export default Root;
