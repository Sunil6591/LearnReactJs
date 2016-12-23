import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const App = React.createClass({
  propTypes: {
    children: PropTypes.node
  },
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/page1">Page 1</Link></li>
          <li><Link to="/page2">Page 2</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
});

export default App;
