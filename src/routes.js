// hack for hot load replacement
if (process.env.NODE_ENV === 'development') {
  require('./components/Page1');
  require('./components/Page2');
  require('./components/App');
  require('./components/MyFirstComponent');
}
const routes = {
  path: '/',
  component: require('./components/App').default,
  childRoutes: [
    {
      path: 'page1',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./components/Page1').default);
        });
      }
    },
    {
      path: 'page2',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./components/Page2').default);
        });
      }
    }
  ]
};

export default routes;
