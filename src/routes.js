import React from 'react';
import { Route } from 'react-router';
// hack for hot load replacement
if (process.env.NODE_ENV === 'development') {
  require('./components/Page1');
  require('./components/Page2');
  require('./components/App');
  require('./components/MyFirstComponent');
}
const routes = (
  <Route path="/" component={require('./components/App').default}>
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
    }} />
  </Route>
);

export default routes;
