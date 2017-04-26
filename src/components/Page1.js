import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import Modal from './Modal';

const Page1 = React.createClass({
  propTypes: {
    children: PropTypes.node,
    location: PropTypes.object.isRequired
  },
  render() {
    let { location } = this.props;
    const isModal = location.state && location.state.modal;
    return (
      <div>
        <h1>Page 1</h1>
        <Link to={{
                pathname: `/page1/first`,
                state: { modal: true, returnTo: this.props.location.pathname }
              }}>First component</Link>
        {isModal && (
          <Modal title={'My First Component'} returnTo={location.state.returnTo}>
            {this.props.children}
          </Modal>
        )}
      </div>
    );
  }
});

export default Page1;
