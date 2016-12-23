import React from 'react';
import styles from './MyFirstComponent.css';

const MyFirstComponent = React.createClass({
  render() {
    return (
      <h1 className={styles.blue}>Hello, world!</h1>
    );
  }
});

export default MyFirstComponent;
