import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

const App = React.createClass({
  propTypes: {
    children: PropTypes.node
  },
  handleLogout() {
    this.props.route.auth.logout();
  },
  render() {
    let children = null;
    if (this.props.children) {
      children = React.cloneElement(this.props.children, {
        auth: this.props.route.auth //sends auth instance from route to children
      });
    }
    return (
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/page1">Page 1</Link></li>
          <li><Link to="/page2">Page 2</Link></li>
        </ul>
        {this.props.route.auth.loggedIn() ? (
          <button className="btn btn-primary"
            onClick={this.handleLogout}>Logout</button>
        ) : null}

        {children}
      </div>
    );
  }
});

export default App;
