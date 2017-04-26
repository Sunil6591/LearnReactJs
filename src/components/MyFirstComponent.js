import React, { PropTypes } from 'react';
import styles from './MyFirstComponent.css';

const MyFirstComponent = React.createClass({
  render() {
    const { onClose } = this.props;
    return (
      <div>
        <div className="modal-header">
          <button type="button" className="close" aria-label="Close" onClick={onClose}><span aria-hidden="true">&times;</span></button>
          <h4 className="modal-title">My First Component 123</h4>
        </div>
        <div className="modal-body">
          <h1 className={styles.blue}>Hello, world!</h1>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-primary" onClick={onClose}>Close</button>
        </div>
      </div>
    );
  }
});

MyFirstComponent.propTypes = {
  onClose: PropTypes.func.isRequired
};
export default MyFirstComponent;
