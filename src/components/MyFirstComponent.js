import React from 'react';
import PropTypes from 'prop-types';
import styles from './MyFirstComponent.css';

const MyFirstComponent = React.createClass({
  propTypes: {
    onClose: PropTypes.func.isRequired,
    showSmallHeader: PropTypes.bool
  },
  getInitialState() {
    return {
      counter: 0
    };
  },
  handleClick() {
    this.setState({
      counter: this.state.counter + 1
    });
  },
  render() {
    const { onClose, showSmallHeader } = this.props;
    const { counter } = this.state;
    return (
      <div>
        <div className="modal-header">
          <button type="button" className="close" aria-label="Close" onClick={onClose}><span aria-hidden="true">&times;</span></button>
          <h4 className="modal-title">My First Component</h4>
        </div>
        <div className="modal-body">
          <h1 className={styles.blue}>Hello, world!</h1>
          {showSmallHeader ? <h2>Hello, minions!</h2> : null}
          <span>{counter}</span>
          <button className="counter" type="button" onClick={this.handleClick}></button>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-primary" onClick={onClose}>Close</button>
        </div>
      </div>
    );
  }
});

export default MyFirstComponent;
