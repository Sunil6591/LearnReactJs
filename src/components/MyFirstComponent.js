import React, { PropTypes } from 'react';
import styles from './MyFirstComponent.css';

const MyFirstComponent = React.createClass({
  propTypes: {
    onClose: PropTypes.func.isRequired,
    showSmallHeader: PropTypes.bool
  },
  render() {
    const { onClose, showSmallHeader } = this.props;
    return (
      <div>
        <div className="modal-header">
          <button type="button" className="close" aria-label="Close" onClick={onClose}><span aria-hidden="true">&times;</span></button>
          <h4 className="modal-title">My First Component 123</h4>
        </div>
        <div className="modal-body">
          <h1 className={styles.blue}>Hello, world!</h1>
          {showSmallHeader ? <h2>Hello, minions!</h2> : null}
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-primary" onClick={onClose}>Close</button>
        </div>
      </div>
    );
  }
});

export default MyFirstComponent;
