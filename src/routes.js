import React from 'react';
import { Route } from 'react-router';

import AuthService from './utils/AuthService';
// hack for hot load replacement
if (process.env.NODE_ENV === 'development') {
  require('./components/Page1');
  require('./components/Page2');
  require('./components/App');
  require('./components/MyFirstComponent');
}

const auth = new AuthService('dxxv4smzlVhEQRbvsn7gooKYtDHknjDf', 'sunil-ekids.eu.auth0.com');
// validate authentication for private routes
const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace({ pathname: '/login' })
  }
}
const routes = (
  <Route path="/" component={require('./components/App').default} auth={auth}>

    <Route path="login" getComponent={(nextState, cb) => {
      require.ensure([], (require) => {
        cb(null, require('./components/Login').default);
      });
    }} />
    <Route path="page1" getComponent={(nextState, cb) => {
      require.ensure([], (require) => {
        cb(null, require('./components/Page1').default);
      });
    }}>
      <Route path="first" getComponent={(nextState, cb) => {
        require.ensure([], (require) => {
          cb(null, require('./components/MyFirstComponent').default);
        });
      }} />
    </Route>
    <Route path="page2" getComponent={(nextState, cb) => {
      require.ensure([], (require) => {
        cb(null, require('./components/Page2').default);
      });
    }} onEnter={requireAuth} />
  </Route>
);

export default routes;
