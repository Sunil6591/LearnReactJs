import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import MyFirstComponent from './components/MyFirstComponent';

ReactDOM.render(
  <AppContainer>
    <MyFirstComponent />
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./components/MyFirstComponent', () => {
    const NextApp = require('./components/MyFirstComponent').default;
    ReactDOM.render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
