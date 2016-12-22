import React from 'react';

import MyFirstComponent from './MyFirstComponent';

const Page1 = React.createClass({
  render() {
    return (
      <div>
        <h1>Page 1</h1>
        <MyFirstComponent />
      </div>
    );
  }
});

export default Page1;
