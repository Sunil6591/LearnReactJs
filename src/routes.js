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
    }
  ]
};

export default routes;
